import { configureStore } from '@reduxjs/toolkit'
import { listApi } from './services/listApi'

export const store = configureStore({
  reducer: {
    [listApi.reducerPath]: listApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
