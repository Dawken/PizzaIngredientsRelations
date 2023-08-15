import React from 'react'
import loading from './skeletonLoading.module.scss'
import styles from '../../ui/itemCard/itemCard.module.scss'

const SkeletonItemCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardPhotoContainer}>
                <div className={`${styles.cardPhoto} ${loading.skeleton}`} />
            </div>
            <div className={styles.cardName}>
                <div
                    className={`${loading.skeleton} ${loading.skeletonText}`}
                ></div>
            </div>
        </div>
    )
}
export default SkeletonItemCard
