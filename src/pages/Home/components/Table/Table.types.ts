import { ListItem } from 'src/shared/types/list.types'

export type TableItem = ListItem

export type GetListResponse = TableItem[]

export type UpdateItem = TableItem

export type CreateItemResponse = {
  current: TableItem
}

export interface TableLineProps {
  lineData: TableItem
  onAddChild: (id: number) => void
  onDelete: (id: number) => void
  onDoubleClick: (id: number) => void
  onCancelEdit: () => void
  isEditing: boolean
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>, id: number | null) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, id: number | null) => void
  editingValues: Partial<TableItem> | null
}
