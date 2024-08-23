import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Header, Sidebar } from 'src/shared/components'

import styles from './MainLayout.module.scss'
import { useEffect } from 'react'
import { ROUTES } from 'src/app/routes/routes.enum'

const MainLayout: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === ROUTES.ROOT) {
      navigate(ROUTES.CMP)
    }
  }, [navigate, pathname]) //eslint ругался, если не добавлять navigate

  return (
    <div className={styles.mainLayout}>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.inner}>
          <div className={styles.box}>
            <div className={styles.breadcrumbs}>Строительно монтажные работы</div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
