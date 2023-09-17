import { useGetByIdCommentQuery } from '@store'
import { utilFormatDateFromSeconds } from '@utils'
import { UiSubCommentItemSkeleton } from './sub-comment-item-skeleton.ui'

export const UiSubCommentItem = ({
    id,
}: {
    id: number
    className?: string
}) => {
    const { data, isLoading, isError } = useGetByIdCommentQuery({ id })

    if (isError) {
        return <>Oops! 😞 An error occurred while loading the data.</>
    }

    if (isLoading) {
        return <UiSubCommentItemSkeleton />
    }

    return (
        <>
            {data && (
                <div className="flex flex-col gap-3 border-b-8 border-white bg-slate-50 p-2">
                    <p className="overflow-hidden overflow-ellipsis text-sm">
                        {data.by ? data.by : 'Unknown author'} •{' '}
                        {data.time
                            ? utilFormatDateFromSeconds(data.time)
                            : 'Unknown published'}
                    </p>
                    <p className="overflow-hidden overflow-ellipsis text-sm text-slate-400">
                        {data.text ? data.text : 'Unknown comment'}
                    </p>
                </div>
            )}
        </>
    )
}
