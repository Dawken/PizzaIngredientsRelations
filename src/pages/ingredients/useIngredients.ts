import lignumSoftBackend from '../../lib/axiosConfig'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

const useIngredients = () => {
    const { isLoading, data: ingredients } = useQuery(
        'ingredients',
        () => lignumSoftBackend.get('/api/ingredients'),
        {
            onError: () => {
                toast.error('Cannot download ingredients, try again later')
            },
        }
    )

    return {
        isLoading,
        ingredients,
    }
}
export default useIngredients
