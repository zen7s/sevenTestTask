import { ListItem } from 'src/shared/types/list.types'
import $api from '../api'
import {
  CreateItemResponse,
  GetListResponse,
  UpdateItem,
} from 'src/pages/Home/components/Table/Table.types'

const findItemById = (items: ListItem[], id: number): ListItem | null => {
  for (const item of items) {
    if (item.id === id) return item
    if (item.child) {
      const found = findItemById(item.child, id)
      if (found) return found
    }
  }
  return null
}

const removeItemById = (items: ListItem[], id: number): boolean => {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      items.splice(i, 1)
      return true
    }
    const childItems = items[i].child
    if (childItems && Array.isArray(childItems)) {
      if (removeItemById(childItems, id)) return true
    }
  }
  return false
}

export const listApi = $api.injectEndpoints({
  endpoints: (builder) => ({
    getList: builder.query<GetListResponse, void>({
      query: () => '/list',
    }),
    updateItem: builder.mutation<void, UpdateItem>({
      query: (item) => ({
        url: `${item.id}/update`,
        method: 'POST',
        body: item,
      }),
      onQueryStarted: async (item, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          listApi.util.updateQueryData('getList', undefined, (draft) => {
            const itemToUpdate = findItemById(draft || [], item.id)
            if (itemToUpdate) {
              Object.assign(itemToUpdate, item)
            }
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
    createItem: builder.mutation<void, ListItem>({
      query: (item) => ({
        url: '/create',
        method: 'POST',
        body: item,
      }),
      onQueryStarted: async (item, { dispatch, queryFulfilled }) => {
        try {
          const response = await queryFulfilled
          const { data } = response as unknown as { data: CreateItemResponse }
          const newItem = data.current

          dispatch(
            listApi.util.updateQueryData('getList', undefined, (draft) => {
              const parentItem = findItemById(draft || [], item.parentId || -1)
              if (parentItem) {
                parentItem.child = parentItem.child || []
                parentItem.child.push(newItem)
              } else {
                draft.push(newItem)
              }
            })
          )
        } catch (error) {
          console.error('Error creating item:', error)
        }
      },
    }),
    deleteItem: builder.mutation<void, number>({
      query: (id) => ({
        url: `${id}/delete`,
        method: 'DELETE',
      }),
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          listApi.util.updateQueryData('getList', undefined, (draft) => {
            removeItemById(draft || [], id)
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
  }),
})

export const {
  useGetListQuery,
  useUpdateItemMutation,
  useCreateItemMutation,
  useDeleteItemMutation,
} = listApi
