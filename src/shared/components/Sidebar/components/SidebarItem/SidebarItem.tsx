import { SidebarItemProps } from './SidebarItem.types'
import { NavLink } from 'react-router-dom'
import cn from 'clsx'

import styles from './SidebarItem.module.scss'

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const { title, icon, to } = item

  return (
    <NavLink
      className={({ isActive }) => (isActive ? cn(styles.item, styles.active) : styles.item)}
      to={to}
    >
      {icon}
      {title}
    </NavLink>
  )
}

export default SidebarItem
