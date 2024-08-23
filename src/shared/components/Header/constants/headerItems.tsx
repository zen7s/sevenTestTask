import { IHeaderItem } from '../types/header.types'
import ReplyIcon from '@mui/icons-material/Reply'
import AppsIcon from '@mui/icons-material/Apps'

export const iconItems: IHeaderItem[] = [{ content: <AppsIcon /> }, { content: <ReplyIcon /> }]

export const textItems: IHeaderItem[] = [
  { content: 'Просмотр', isActive: true },
  { content: 'Управление' },
]
