import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './routes.enum'
import Home from 'src/pages/Home/Home'
import { MainLayout } from 'src/shared/layouts'

const childrens = (Object.keys(ROUTES) as Array<keyof typeof ROUTES>).map((route) => {
  return { path: route, element: <Home /> }
})

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <MainLayout />,
    children: childrens,
  },
])

export default router
