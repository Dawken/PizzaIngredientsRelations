import lignumSoftBackend from '../../lib/axiosConfig'
import { useQuery } from 'react-query'

const useHome = () => {
    const { data: pizzas } = useQuery('pizzas', () =>
        lignumSoftBackend.get('/api/pizzas')
    )

    return {
        pizzas,
    }
}
export default useHome
