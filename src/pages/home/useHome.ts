import lignumSoftBackend from '../../lib/axiosConfig'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

const useHome = () => {
    const { isLoading, data: pizzas } = useQuery(
        'pizzas',
        () => lignumSoftBackend.get('/api/pizzas'),
        {
            onError: () => {
                toast.error('Cannot download pizzas, try again later')
            },
        }
    )

    return {
        isLoading,
        pizzas,
    }
}
export default useHome
