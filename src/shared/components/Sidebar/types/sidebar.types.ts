import { ROUTES } from 'src/app/routes/routes.enum'

export interface ISidebarItem {
  icon?: React.ReactNode
  title: string
  to: ROUTES
}
