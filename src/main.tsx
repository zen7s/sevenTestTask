import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './app/routes/router'

import './app/styles/index.scss'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
