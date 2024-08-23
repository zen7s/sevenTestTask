import { useState } from 'react'
import {
  useGetListQuery,
  useUpdateItemMutation,
  useCreateItemMutation,
  useDeleteItemMutation,
} from 'src/redux/services/listApi'
import { ListItem } from 'src/shared/types/list.types'

export const useTable = () => {
  const { data: list = [], isLoading, isError } = useGetListQuery()
  const [updateItem] = useUpdateItemMutation()
  const [createItem, { isLoading: isCreating }] = useCreateItemMutation()
  const [deleteItem] = useDeleteItemMutation()

  const [editingItemId, setEditingItemId] = useState<number | undefined>(undefined)
  const [isAdding, setIsAdding] = useState(false)
  const [editingValues, setEditingValues] = useState<Partial<ListItem>>({
    id: undefined,
    equipmentCosts: 0,
    estimatedProfit: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    rowName: '',
    salary: 0,
    supportCosts: 0,
    parentId: undefined,
  })

  const handleAddChild = (parentId: number | undefined) => {
    if (isCreating) return
    setEditingValues({
      id: undefined,
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      rowName: '',
      salary: 0,
      supportCosts: 0,
      parentId,
    })
    setEditingItemId(undefined)
    setIsAdding(true)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setEditingValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !isCreating) {
      try {
        if (isAdding) {
          if (editingValues.rowName) {
            await createItem(editingValues as ListItem).unwrap()
            setIsAdding(false)
            setEditingValues({
              id: undefined,
              equipmentCosts: 0,
              estimatedProfit: 0,
              machineOperatorSalary: 0,
              mainCosts: 0,
              materials: 0,
              mimExploitation: 0,
              overheads: 0,
              rowName: '',
              salary: 0,
              supportCosts: 0,
              parentId: undefined,
            })
          }
        } else if (editingItemId !== undefined) {
          await updateItem({ id: editingItemId, ...editingValues } as ListItem).unwrap()
          setEditingItemId(undefined)
        }
      } catch (error) {
        console.error('Error creating or updating item:', error)
      }
    } else if (event.key === 'Escape') {
      handleCancelEdit()
    }
  }

  const handleDoubleClick = (id: number) => {
    setEditingItemId(id)
    const currentItem = findItemById(list, id)
    if (currentItem) {
      setEditingValues(currentItem)
    }
  }

  const handleCancelEdit = () => {
    setIsAdding(false)
    setEditingItemId(undefined)
  }

  const handleDelete = async (id: number) => {
    try {
      await deleteItem(id).unwrap()
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }

  const findItemById = (items: ListItem[], id: number): ListItem | null => {
    for (const item of items) {
      if (item.id === id) {
        return item
      }
      if (item.child && item.child.length > 0) {
        const found = findItemById(item.child, id)
        if (found) {
          return found
        }
      }
    }
    return null
  }

  return {
    list,
    isLoading,
    isError,
    createItem,
    editingItemId,
    isAdding,
    editingValues,
    handleAddChild,
    handleInputChange,
    handleKeyDown,
    handleDoubleClick,
    handleCancelEdit,
    handleDelete,
  }
}
