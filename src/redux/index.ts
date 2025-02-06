import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter-slice'
import { mainApi } from './api'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch