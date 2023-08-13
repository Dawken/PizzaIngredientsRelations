import { useParams } from 'react-router-dom'
import lignumSoftBackend from '../../lib/axiosConfig'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

const useIngredient = () => {
    const { id } = useParams()

    const { isLoading, data: ingredient } = useQuery(
        ['ingredient', `${id}`],
        () =>
            lignumSoftBackend.get(
                `/api/ingredients/${id}?populate=pizzas,operation`
            ),
        {
            onError: () => {
                toast.error('Cannot download ingredient, try again later')
            },
        }
    )

    return {
        ingredient,
        isLoading,
    }
}
export default useIngredient
