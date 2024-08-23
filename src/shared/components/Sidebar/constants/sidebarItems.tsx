import DashboardIcon from '@mui/icons-material/Dashboard'
import { ISidebarItem } from '../types/sidebar.types'
import { ROUTES } from 'src/app/routes/routes.enum'

export const sidebarItems: ISidebarItem[] = [
  {
    icon: <DashboardIcon />,
    title: 'По проекту',
    to: ROUTES.PROJECT,
  },
  { icon: <DashboardIcon />, title: 'Объекты', to: ROUTES.OBJECT },
  { icon: <DashboardIcon />, title: 'РД', to: ROUTES.RD },
  { icon: <DashboardIcon />, title: 'МТО', to: ROUTES.MTO },
  { icon: <DashboardIcon />, title: 'СМР', to: ROUTES.CMP },
  { icon: <DashboardIcon />, title: 'График', to: ROUTES.GRAPH },
  { icon: <DashboardIcon />, title: 'МиМ', to: ROUTES.MIM },
  { icon: <DashboardIcon />, title: 'Рабочие', to: ROUTES.WORKERS },
  { icon: <DashboardIcon />, title: 'Капвложения', to: ROUTES.CAPITAL },
  { icon: <DashboardIcon />, title: 'Бюджет', to: ROUTES.BUDGET },
  { icon: <DashboardIcon />, title: 'Финансирование', to: ROUTES.FINANCING },
  { icon: <DashboardIcon />, title: 'Панорамы', to: ROUTES.PANORAMS },
  { icon: <DashboardIcon />, title: 'Камеры', to: ROUTES.CAMERAS },
  { icon: <DashboardIcon />, title: 'Поручения', to: ROUTES.ASSIGNMENTS },
  { icon: <DashboardIcon />, title: 'Контрагенты', to: ROUTES.CONTRACTORS },
]
