import { SidebarItem, SidebarNav } from './components'
import { sidebarItems } from './constants/sidebarItems'
import styles from './Sidebar.module.scss'

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <SidebarNav />
      {sidebarItems.map((item, index) => (
        <SidebarItem item={item} key={index} />
      ))}
    </aside>
  )
}

export default Sidebar
