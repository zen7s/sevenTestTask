import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './routes.enum'
import Home from 'src/pages/Home/Home'
import { MainLayout } from 'src/shared/layouts'
import NotFound from 'src/pages/NotFound/NotFound'

const childrens = (Object.keys(ROUTES) as Array<keyof typeof ROUTES>).map((route) => {
  return { path: route, element: <Home /> }
})

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <MainLayout />,
    children: childrens,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
