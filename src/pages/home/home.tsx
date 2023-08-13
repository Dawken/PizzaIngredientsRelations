import React from 'react'
import styles from './home.module.scss'
import Navbar from '../../components/ui/navbar/navbar'
import useHome from './useHome'
import ItemCard from '../../components/ui/itemCard/itemCard'
import { PizzaType } from '../../types/pizza'
import { Link } from 'react-router-dom'

const Home = () => {
    const { pizzas } = useHome()

    return (
        <div className={styles.layout}>
            <Navbar />
            <div className={styles.pizzas}>
                {pizzas?.data.map((pizza: PizzaType) => {
                    return (
                        <Link to={`/pizzas/${pizza._id}`} key={pizza._id}>
                            <ItemCard item={pizza} key={pizza._id} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
export default Home
