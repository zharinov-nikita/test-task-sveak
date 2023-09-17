import { AiOutlineSync } from 'react-icons/ai'
import { useGetAllNewNewsIdsQuery } from '../../../store/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { useEffect } from 'react'
import { setIsRefreshData } from '../../../store/slices'

export const UiNewsFeedControls = () => {
    const { refetch, isFetching, isLoading } = useGetAllNewNewsIdsQuery(null)
    const { isRefreshData } = useSelector(
        (s: RootState) => s.refreshDataReducer
    )
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoading) {
            dispatch(setIsRefreshData(isFetching))
        }
    }, [isFetching])

    return (
        <div className="mb-4 flex flex-row justify-between">
            <h1 className="text-xl font-medium">Feed news</h1>
            <button
                onClick={refetch}
                className="flex items-center justify-center gap-2 rounded bg-blue-500 px-2 py-1 text-white hover:cursor-pointer"
            >
                Update feed
                <AiOutlineSync
                    className={isRefreshData ? 'animate-spin' : 'animate-none'}
                />
            </button>
        </div>
    )
}
