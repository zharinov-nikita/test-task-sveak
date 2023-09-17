export const UiNewsItemSkeleton = () => {
    return (
        <div className="mb-2 flex h-28 flex-col justify-between gap-2 rounded border-2 border-gray-100 bg-white p-2">
            <div className="line-clamp-2 w-fit animate-pulse rounded  bg-gray-100 text-transparent">
                Why do software nowadays take so much more memory and processing
                power (2020)
            </div>
            <div className="w-fit animate-pulse rounded bg-gray-100 text-transparent">
                teleforce • 17.09.2023 • Rating 24
            </div>
        </div>
    )
}
