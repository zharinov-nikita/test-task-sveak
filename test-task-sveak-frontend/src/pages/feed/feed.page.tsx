import { ErrorBoundary } from 'react-error-boundary'
import { UiNewsFeedControls, UiNewsList } from './ui'

const PageFeed = () => {
    return (
        <div className="flex flex-col">
            <ErrorBoundary fallback={<>Oops! 😞 An error has occurred</>}>
                <UiNewsFeedControls />
                <UiNewsList />
            </ErrorBoundary>
        </div>
    )
}

export default PageFeed
