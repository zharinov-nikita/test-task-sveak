import { AiOutlineArrowLeft, AiOutlineSync } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useGetNewsIdFromSearchParamsAndGetNews } from '../hooks'
import { RootState } from '@store'
import { useSelector } from 'react-redux'

export const UiCommentControls = () => {
    const navigate = useNavigate()
    function navigateToNewsFeed() {
        navigate('/feed')
    }

    const { isRefreshData } = useSelector(
        (s: RootState) => s.refreshDataReducer
    )

    const { refetch } = useGetNewsIdFromSearchParamsAndGetNews()

    return (
        <div className="flex flex-row items-center justify-between">
            <button
                onClick={navigateToNewsFeed}
                className="flex items-center justify-center gap-1 rounded bg-blue-500 px-2 py-1 text-white outline-none hover:cursor-pointer"
            >
                <AiOutlineArrowLeft />
                Back
            </button>
            <button
                onClick={refetch}
                className="flex items-center justify-center gap-2 rounded bg-blue-500 px-2 py-1 text-white outline-none hover:cursor-pointer"
            >
                Update comments
                <AiOutlineSync
                    className={isRefreshData ? 'animate-spin' : 'animate-none'}
                />
            </button>
        </div>
    )
}
