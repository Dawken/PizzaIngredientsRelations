import lignumSoftBackend from '../../lib/axiosConfig'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

const useHome = () => {
    const { data: pizzas } = useQuery(
        'pizzas',
        () => lignumSoftBackend.get('/api/pizzas'),
        {
            onError: () => {
                toast.error('Cannot download pizzas, try again later')
            },
        }
    )

    return {
        pizzas,
    }
}
export default useHome
