import React from 'react'
import styles from './home.module.scss'
import Navbar from '../../components/ui/navbar/navbar'
import useHome from './useHome'
import ItemCard from '../../components/ui/itemCard/itemCard'
import { PizzaType } from '../../types/pizza'

const Home = () => {
    const { pizzas } = useHome()

    return (
        <div className={styles.layout}>
            <Navbar />
            <div className={styles.pizzas}>
                {pizzas?.data.map((item: PizzaType) => {
                    return <ItemCard item={item} key={item._id} />
                })}
            </div>
        </div>
    )
}
export default Home
