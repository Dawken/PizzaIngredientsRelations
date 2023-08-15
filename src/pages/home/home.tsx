import React from 'react'
import styles from './home.module.scss'
import Navbar from '../../components/ui/navbar/navbar'
import useHome from './useHome'
import ItemCard from '../../components/ui/itemCard/itemCard'
import { PizzaType } from '../../types/pizza'
import { Link } from 'react-router-dom'
import SkeletonItemCard from '../../components/animations/skeletonLoading/skeletonItemCard'
import arrayFrom from '../../utils/arrayFrom'

const Home = () => {
    const { isLoading, pizzas } = useHome()

    return (
        <div className={styles.layout}>
            <Navbar />
            <div className={styles.pizzas}>
                {isLoading
                    ? arrayFrom(5, <SkeletonItemCard />)
                    : pizzas?.data.map((pizza: PizzaType) => {
                          return (
                              <Link to={`/pizzas/${pizza._id}`} key={pizza._id}>
                                  <ItemCard name={pizza.name} key={pizza._id} />
                              </Link>
                          )
                      })}
            </div>
        </div>
    )
}
export default Home
