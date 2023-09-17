import { useSelector } from 'react-redux'
import { RootState } from './store'
import './styles/index.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ComponentLoadingFallback } from './components'
import { AiOutlineSync } from 'react-icons/ai'

export const RefreshData = () => {
    const { isRefreshData } = useSelector(
        (state: RootState) => state.refreshDataReducer
    )

    return (
        <>
            {isRefreshData && (
                <div className="mb-2 flex w-full items-center justify-center gap-2 rounded bg-slate-100 px-2 py-1 text-sm font-medium text-slate-500">
                    <span>refresh data</span>
                    <AiOutlineSync
                        className={
                            isRefreshData ? 'animate-spin' : 'animate-none'
                        }
                    />
                </div>
            )}
        </>
    )
}

const routes = [
    {
        path: 'feed',
        Page: lazy(() => import('./pages/feed/feed.page')),
    },
    {
        path: 'news/:id',
        Page: lazy(() => import('./pages/news/news.page')),
    },
]

export const App = () => {
    return (
        <>
            <RefreshData />
            <Routes>
                {routes.map(({ Page, path }, index) => (
                    <Route
                        key={index}
                        path={path}
                        element={
                            <Suspense fallback={<ComponentLoadingFallback />}>
                                <Page />
                            </Suspense>
                        }
                    />
                ))}
                <Route path="*" element={<Navigate to="feed" />} />
            </Routes>
        </>
    )
}
