import { useParams } from 'react-router-dom'
import lignumSoftBackend from '../../lib/axiosConfig'
import { useQuery } from 'react-query'

const usePizza = () => {
    const { id } = useParams()

    const { isLoading, data: pizza } = useQuery(['pizza', `${id}`], () =>
        lignumSoftBackend.get(
            `/api/pizzas/${id}?populate=ingredients,operations`
        )
    )

    return {
        pizza,
        isLoading,
    }
}
export default usePizza
