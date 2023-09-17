export const UiSubCommentItemSkeleton = () => {
    return (
        <div className="flex flex-col gap-3 border-b-8 border-white bg-slate-50 p-2">
            <p className="w-fit animate-pulse overflow-hidden overflow-ellipsis rounded bg-gray-200 text-sm text-transparent">
                tharkun__ • 16.09.2023
            </p>
            <p className="w-fit animate-pulse overflow-hidden overflow-ellipsis rounded bg-gray-200 text-sm text-slate-400 text-transparent">
                once hade the unfortunate experience of building an API for a
                government org where the data changed once a year or when
                amendments were made which happens very infrequently.
            </p>
        </div>
    )
}
