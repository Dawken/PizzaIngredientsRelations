import { useParams } from 'react-router-dom'
import lignumSoftBackend from '../../lib/axiosConfig'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

const useOperation = () => {
    const { id } = useParams()

    const { isLoading, data: operation } = useQuery(
        ['operation', `${id}`],
        () =>
            lignumSoftBackend.get(
                `/api/operations/${id}?populate=pizzas,ingredients`
            ),
        {
            onError: () => {
                toast.error('Cannot download operation, try again later')
            },
        }
    )

    return {
        operation,
        isLoading,
    }
}
export default useOperation
