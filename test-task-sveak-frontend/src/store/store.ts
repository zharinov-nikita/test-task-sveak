import { configureStore } from '@reduxjs/toolkit'
import { newsApi } from './api'
import { refreshDataReducer } from './slices'

export const store = configureStore({
    reducer: {
        refreshDataReducer,
        [newsApi.reducerPath]: newsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
