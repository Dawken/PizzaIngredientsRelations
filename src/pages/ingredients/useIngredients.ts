import lignumSoftBackend from '../../lib/axiosConfig'
import { useQuery } from 'react-query'

const useIngredients = () => {
    const { data: ingredients } = useQuery('ingredients', () =>
        lignumSoftBackend.get('/api/ingredients')
    )

    return {
        ingredients,
    }
}
export default useIngredients
