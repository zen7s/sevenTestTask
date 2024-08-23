export interface ListItem {
  id: number
  equipmentCosts: number
  estimatedProfit: number
  machineOperatorSalary: number
  mainCosts: number
  materials: number
  mimExploitation: number
  overheads: number
  rowName: string
  salary: number
  supportCosts: number
  total: number
  parentId?: number | null
  child?: ListItem[] | null
  level?: number
}
