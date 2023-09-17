import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { useGetByIdNewsQuery } from '../../../store/api'
import { utilFormatDateFromSeconds } from '../../../utils'
import { utilFormatMeta } from '../utils'
import { UiNewsItemSkeleton } from './news-item-skeleton.ui'

export interface NewsItemProps {
    id: number
    title?: string
    author?: string
    published?: string | number
    rating?: string | number
}

export const NewsItem: FC<NewsItemProps> = memo((props) => {
    const { data, isLoading, isError } = useGetByIdNewsQuery({
        id: props.id,
    })

    if (isError) {
        return <>Oops! 😞 An error occurred while loading the data.</>
    }

    if (isLoading) {
        return <UiNewsItemSkeleton />
    }

    return (
        <>
            {data && (
                <Link
                    to={`/news/${props.id}`}
                    className="mb-2 flex h-28 flex-col justify-between gap-2 rounded border-2 border-gray-100 bg-white p-2"
                >
                    <h2 className="line-clamp-2 overflow-hidden overflow-ellipsis text-base font-medium">
                        {data.title}
                    </h2>
                    <p className="text-sm font-normal text-slate-400">
                        {utilFormatMeta(
                            data.by,
                            utilFormatDateFromSeconds(data.time || 0),
                            data.score
                        )}
                    </p>
                </Link>
            )}
        </>
    )
})
