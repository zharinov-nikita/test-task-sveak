import { UiCommentItem } from './comment-item.ui'
import { Virtuoso } from 'react-virtuoso'
import { UiCommentItemSkeleton } from './comment-item-skeleton.ui'
import { useGetNewsIdFromSearchParamsAndGetNews } from '../hooks'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setIsRefreshData } from '@store'

export const UiCommentList = () => {
    const { data, isFetching, isLoading } =
        useGetNewsIdFromSearchParamsAndGetNews()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoading) {
            dispatch(setIsRefreshData(isFetching))
        }
    }, [isFetching])

    if (isLoading || isFetching) {
        return (
            <div className="flex flex-col gap-2 rounded border-2 border-b-0 border-gray-100 bg-white">
                <Virtuoso
                    useWindowScroll
                    totalCount={100}
                    itemContent={() => <UiCommentItemSkeleton />}
                />
            </div>
        )
    }

    return (
        <>
            {data && data.kids && (
                <div className="flex flex-col gap-2 rounded border-2 border-b-0 border-gray-100 bg-white">
                    <Virtuoso
                        useWindowScroll
                        data={data.kids}
                        totalCount={data.kids.length}
                        itemContent={(_, id) => <UiCommentItem id={id} />}
                    />
                </div>
            )}
        </>
    )
}
