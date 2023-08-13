import React from 'react'
import styles from './itemCard.module.scss'
import notFound from '../../../assets/notFound.png'
import { PizzaType } from '../../../types/pizza'
import { IngredientType } from '../../../types/ingredient'
import { OperationType } from '../../../types/operation'

type ItemCardType = {
    item: PizzaType | IngredientType | OperationType
}

const ItemCard = ({ item }: ItemCardType) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardPhotoContainer}>
                <img className={styles.cardPhoto} src={notFound} />
            </div>
            <div className={styles.cardName}>{item.name}</div>
        </div>
    )
}
export default ItemCard
