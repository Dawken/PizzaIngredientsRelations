import lignumSoftBackend from '../../lib/axiosConfig'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

const useOperations = () => {
    const { isLoading, data: operations } = useQuery(
        'operations',
        () => lignumSoftBackend.get('/api/operations'),
        {
            onError: () => {
                toast.error('Cannot download operations, try again later')
            },
        }
    )

    return {
        isLoading,
        operations,
    }
}
export default useOperations
