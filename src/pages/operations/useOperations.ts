import lignumSoftBackend from '../../lib/axiosConfig'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

const useOperations = () => {
    const { data: operations } = useQuery(
        'operations',
        () => lignumSoftBackend.get('/api/operations'),
        {
            onError: () => {
                toast.error('Cannot download operations, try again later')
            },
        }
    )

    return {
        operations,
    }
}
export default useOperations
