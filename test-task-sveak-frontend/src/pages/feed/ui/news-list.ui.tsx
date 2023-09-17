import { Virtuoso } from 'react-virtuoso'
import { useGetAllNewNewsIdsQuery } from '../../../store/api'
import { NewsItem } from './news-item.ui'
import { UiNewsItemSkeleton } from './news-item-skeleton.ui'
import { CONSTANTS } from '../../../constants'

export const UiNewsList = () => {
    const { data, isLoading, isFetching, isError } = useGetAllNewNewsIdsQuery(
        null,
        {
            pollingInterval: CONSTANTS.poolingInterval,
        }
    )

    if (isError) {
        return <>Oops! 😞 An error occurred while loading the data.</>
    }

    if (isLoading || isFetching) {
        return (
            <Virtuoso
                useWindowScroll
                totalCount={100}
                itemContent={() => <UiNewsItemSkeleton />}
            />
        )
    }

    return (
        <>
            {data && (
                <Virtuoso
                    useWindowScroll
                    data={data}
                    totalCount={data.length}
                    itemContent={(_, id) => <NewsItem id={id} />}
                />
            )}
        </>
    )
}
