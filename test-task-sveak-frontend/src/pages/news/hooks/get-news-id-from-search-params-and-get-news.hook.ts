import { useParams } from 'react-router-dom'
import { useGetByIdNewsQuery } from '@store'
import { CONSTANTS } from '@constants'

export function useGetNewsIdFromSearchParamsAndGetNews() {
    const params = useParams<{ id: string }>()
    return useGetByIdNewsQuery(
        {
            id: params.id as string,
        },
        {
            pollingInterval: CONSTANTS.poolingInterval,
        }
    )
}
