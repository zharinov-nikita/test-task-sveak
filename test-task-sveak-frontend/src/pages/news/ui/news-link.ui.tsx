import { AiOutlineLink } from 'react-icons/ai'
import { useGetNewsIdFromSearchParamsAndGetNews } from '../hooks'

export const UiNewsLink = () => {
    const { data, isLoading, isFetching, isError } =
        useGetNewsIdFromSearchParamsAndGetNews()
    const comments = `${data && data.kids ? data.kids.length : 'No'} comments`

    if (isError) {
        return <>Oops! 😞 An error occurred while loading the data.</>
    }

    if (isLoading || isFetching) {
        return <UiNewsLinkSkeleton />
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex w-full flex-row items-center gap-2">
                <div className="h-0.5 flex-1 bg-blue-100"></div>
                {data && data.url && (
                    <a
                        target="_blank"
                        href={data.url}
                        className="line-clamp-1 flex items-center justify-center gap-2 rounded bg-blue-500 px-2 py-1 text-white outline-none hover:cursor-pointer"
                    >
                        {new URL(data.url).host}
                        <AiOutlineLink />
                    </a>
                )}
                <div className="h-0.5 flex-1 bg-blue-100"></div>
            </div>
            <p className="text-blue-500">{comments}</p>
        </div>
    )
}

export const UiNewsLinkSkeleton = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex w-full flex-row items-center gap-2">
                <div className="h-0.5 flex-1 bg-blue-100"></div>
                <div className="hover:cursor-pointe line-clamp-1 flex animate-pulse items-center justify-center gap-2 rounded bg-blue-500 px-2 py-1 text-transparent outline-none">
                    github.com
                    <AiOutlineLink />
                </div>
                <div className="h-0.5 flex-1 bg-blue-100"></div>
            </div>
            <p className="w-fit animate-pulse rounded bg-blue-50 text-sm  text-transparent">
                31 comments
            </p>
        </div>
    )
}
