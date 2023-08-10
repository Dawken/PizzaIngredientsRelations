import lignumSoftBackend from '../../lib/axiosConfig'
import { useQuery } from 'react-query'


const useHome = () => {

    const { data } = useQuery('pizzas', () =>
        lignumSoftBackend.get('/api/pizzas')
    )


    return {
        data
    }
}
export default useHome
