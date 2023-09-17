import { memo, useState } from 'react'
import { useGetByIdCommentQuery } from '@store'
import { utilFormatDateFromSeconds } from '@utils'
import { Virtuoso } from 'react-virtuoso'
import { UiSubCommentItem } from './sub-comment-item.ui'
import { UiCommentItemSkeleton } from './comment-item-skeleton.ui'

export const UiCommentItem = ({ id }: { id: number; kids?: number[] }) => {
    const { data, isLoading, isError } = useGetByIdCommentQuery({ id })
    const [isOpen, setIsOpen] = useState<boolean>(false)

    function onSetIsOpen() {
        setIsOpen((value) => !value)
    }

    if (isError) {
        return <>Oops! 😞 An error occurred while loading the data.</>
    }

    if (isLoading) {
        return <UiCommentItemSkeleton />
    }

    return (
        <>
            {data && (
                <div className="flex flex-col gap-3 border-b-2 border-gray-100 p-2">
                    <CommentItemMeta
                        by={data.by}
                        time={data.time}
                        text={data.text}
                    />
                    {isOpen && data.kids && (
                        <div className="flex flex-col  pl-4">
                            <Virtuoso
                                useWindowScroll
                                data={data.kids}
                                totalCount={data.kids?.length}
                                itemContent={(_, id) => (
                                    <UiSubCommentItem id={id} />
                                )}
                            />
                        </div>
                    )}
                    {data.kids && (
                        <CommentThreadOpener
                            isOpen={isOpen}
                            onSetIsOpen={onSetIsOpen}
                            kids={data.kids}
                        />
                    )}
                </div>
            )}
        </>
    )
}

export const CommentItemMeta = memo(
    ({ by, time, text }: { by?: string; time?: number; text?: string }) => {
        const author = `${by ? by : 'Unknown author'} •`
        const published = `${
            time ? utilFormatDateFromSeconds(time) : 'Unknown published'
        }`
        const comment = `${text ? text : 'Unknown text'}`

        return (
            <>
                <p className="text-sm">
                    {author} {published}
                </p>
                <p className="overflow-hidden overflow-ellipsis text-sm text-slate-400">
                    {comment}
                </p>
            </>
        )
    }
)

export const CommentThreadOpener = memo(
    ({
        onSetIsOpen,
        isOpen,
        kids,
    }: {
        onSetIsOpen: () => void
        isOpen: boolean
        kids: number[]
    }) => {
        return (
            <p
                onClick={onSetIsOpen}
                className="w-fit rounded px-2  py-1 text-sm text-blue-500 hover:cursor-pointer"
            >
                {isOpen ? 'Closed' : `Open ${kids.length} answer`}
            </p>
        )
    }
)
