import React from 'react'
import styles from './pizzaCard.module.scss'
import notFound from '../../../assets/notFound.png'
import { PizzaType } from '../../../types/pizza'


const PizzaCard = ({item}: {item: PizzaType}) => {

    return (
        <div className={styles.pizzaCard}>
            <div className={styles.pizzaPhotoContainer}>
                <img
                    className={styles.pizzaPhoto}
                    src={notFound}
                />
            </div>
            <div className={styles.pizzaName}>
                {item.pizza}
            </div>
        </div>
    )
}
export default PizzaCard
