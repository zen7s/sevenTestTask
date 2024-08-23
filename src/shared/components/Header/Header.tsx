import { Button } from 'src/shared/ui'
import { iconItems, textItems } from './constants/headerItems'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {iconItems.map((item, index) => (
          <Button isActive={item.isActive} key={index}>
            {item.content}
          </Button>
        ))}
      </nav>
      <div className={styles.buttons}>
        {textItems.map((item, index) => (
          <Button isActive={item.isActive} key={index}>
            {item.content}
          </Button>
        ))}
      </div>
    </header>
  )
}

export default Header
