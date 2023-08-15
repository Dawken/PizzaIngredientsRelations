import React from 'react'
import styles from './operations.module.scss'
import Navbar from '../../components/ui/navbar/navbar'
import { Link } from 'react-router-dom'
import ItemCard from '../../components/ui/itemCard/itemCard'
import useOperations from './useOperations'
import { OperationType } from '../../types/operation'
import arrayFrom from '../../utils/arrayFrom'
import SkeletonItemCard from '../../components/animations/skeletonLoading/skeletonItemCard'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'

const Operations = () => {
    const { isLoading, operations } = useOperations()

    return (
        <div className={styles.layout}>
            <Navbar />
            {operations?.data.length === 0 ? (
                <div className={styles.operationsNotFound}>
                    <RestaurantMenuIcon className={styles.operationIcon} />
                    <p>No operations found :(</p>
                </div>
            ) : (
                <div className={styles.operations}>
                    {isLoading
                        ? arrayFrom(5, <SkeletonItemCard />)
                        : operations?.data.map((operation: OperationType) => {
                              return (
                                  <Link
                                      to={`/operations/${operation._id}`}
                                      key={operation._id}
                                  >
                                      <ItemCard
                                          name={operation.name}
                                          key={operation._id}
                                      />
                                  </Link>
                              )
                          })}
                </div>
            )}
        </div>
    )
}
export default Operations
