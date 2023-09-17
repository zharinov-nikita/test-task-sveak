import { utilFormatDateFromSeconds } from '@utils'
import { useGetNewsIdFromSearchParamsAndGetNews } from '../hooks'

export const UiNewsData = () => {
    const { data, isLoading, isFetching, isError } =
        useGetNewsIdFromSearchParamsAndGetNews()

    if (isError) {
        return <>Oops! 😞 An error occurred while loading the data.</>
    }

    if (isLoading || isFetching) {
        return <UiNewsDataSkeleton />
    }

    return (
        <>
            {data && (
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-medium">{data?.title}</h1>
                    <div className="text-sm font-normal text-slate-400">
                        {data.by} • {utilFormatDateFromSeconds(data.time || 0)}{' '}
                        • Rating {data.score}
                    </div>
                </div>
            )}
        </>
    )
}

export const UiNewsDataSkeleton = () => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="w-fit animate-pulse rounded bg-gray-200 text-sm  text-transparent">
                Comp.sys.sinclair crap games competition (2021)
                Comp.sys.sinclair crap games competition (2021) games
                competition (2021) games competition (2021)
            </h1>
            <div className="w-fit animate-pulse rounded bg-gray-200 text-sm  text-transparent">
                alexzeitler • 16.09.2023 • Rating 63
            </div>
        </div>
    )
}
