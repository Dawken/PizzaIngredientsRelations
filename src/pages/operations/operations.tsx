import React from 'react'
import styles from './operations.module.scss'
import Navbar from '../../components/ui/navbar/navbar'
import { Link } from 'react-router-dom'
import ItemCard from '../../components/ui/itemCard/itemCard'
import useOperations from './useOperations'
import { OperationType } from '../../types/operation'

const Operations = () => {
    const { operations } = useOperations()

    return (
        <div className={styles.layout}>
            <Navbar />
            <div className={styles.operations}>
                {operations?.data.map((operation: OperationType) => {
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
        </div>
    )
}
export default Operations
