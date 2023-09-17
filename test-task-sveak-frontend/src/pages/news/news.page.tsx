import { useEffect } from 'react'
import { UiCommentControls, UiCommentList, UiNewsData, UiNewsLink } from './ui'
import { ErrorBoundary } from 'react-error-boundary'

export const PageNews = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="flex flex-col gap-4">
            <ErrorBoundary fallback={<>Oops! 😞 An error has occurred</>}>
                <UiCommentControls />
                <UiNewsData />
                <UiNewsLink />
                <UiCommentList />
            </ErrorBoundary>
        </div>
    )
}

export default PageNews
