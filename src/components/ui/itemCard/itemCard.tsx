import React from 'react'
import styles from './itemCard.module.scss'
import notFound from '../../../assets/notFound.png'

type ItemCardNameType = {
    name: string
}

const ItemCard = ({ name }: ItemCardNameType) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardPhotoContainer}>
                <img className={styles.cardPhoto} src={notFound} />
            </div>
            <div className={styles.cardName}>{name}</div>
        </div>
    )
}
export default ItemCard
