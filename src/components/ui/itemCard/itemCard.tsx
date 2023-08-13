import React from 'react'
import styles from './itemCard.module.scss'
import notFound from '../../../assets/notFound.png'
import { PizzaType } from '../../../types/pizza'
import { Link } from 'react-router-dom'

const ItemCard = ({ item }: { item: PizzaType }) => {
    return (
        <Link to={`/pizzas/${item._id}`} className={styles.pizzaCard}>
            <div className={styles.pizzaPhotoContainer}>
                <img className={styles.pizzaPhoto} src={notFound} />
            </div>
            <div className={styles.pizzaName}>{item.pizzaName}</div>
        </Link>
    )
}
export default ItemCard
