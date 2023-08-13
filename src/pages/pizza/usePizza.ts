import { useParams } from 'react-router-dom'
import lignumSoftBackend from '../../lib/axiosConfig'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

const usePizza = () => {
    const { id } = useParams()

    const { isLoading, data: pizza } = useQuery(
        ['pizza', `${id}`],
        () =>
            lignumSoftBackend.get(
                `/api/pizzas/${id}?populate=ingredients,operations`
            ),
        {
            onError: () => {
                toast.error('Cannot download pizza, try again later')
            },
        }
    )

    return {
        pizza,
        isLoading,
    }
}
export default usePizza
