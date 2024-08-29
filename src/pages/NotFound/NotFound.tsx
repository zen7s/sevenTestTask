import cn from 'clsx'
import styles from './NotFound.module.scss'
import { Button } from 'src/shared/ui'
import { Link } from 'react-router-dom'
import { ROUTES } from 'src/app/routes/routes.enum'

const NotFound: React.FC = () => {
  return (
    <div className={cn(styles.wrap, 'page')}>
      <h1>Страница не найдена</h1>
      <Link to={ROUTES.CMP}>
        <Button>Вернуться на главную</Button>
      </Link>
    </div>
  )
}

export default NotFound
