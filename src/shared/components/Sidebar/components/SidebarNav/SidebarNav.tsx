import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import styles from './SidebarNav.module.scss'

const SidebarNav: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <span>Название проекта</span>
        <span className={styles.under}>Аббревиатура</span>
      </div>
      <KeyboardArrowDownIcon />
    </div>
  )
}

export default SidebarNav
