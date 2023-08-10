import React from 'react'
import styles from './home.module.scss'
import Navbar from '../../components/ui/navbar/navbar'
import useHome from './useHome'
import TrackCard from '../../components/ui/pizzaCard/pizzaCard'
import { PizzaType } from '../../types/pizza'


const Home = () => {

    const { data } = useHome()

    return (
        <div className={styles.layout}>
            <Navbar />
            <div className={styles.pizzas}>
                {data?.data.map((item:PizzaType) => {
                    return <TrackCard item={item} key={item._id}/>
                })}
            </div>
        </div>
    )
}
export default Home
