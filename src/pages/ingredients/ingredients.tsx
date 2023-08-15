import React from 'react'
import styles from './ingredients.module.scss'
import Navbar from '../../components/ui/navbar/navbar'
import ItemCard from '../../components/ui/itemCard/itemCard'
import useIngredients from './useIngredients'
import { Link } from 'react-router-dom'
import { IngredientType } from '../../types/ingredient'
import arrayFrom from '../../utils/arrayFrom'
import SkeletonItemCard from '../../components/animations/skeletonLoading/skeletonItemCard'

const Ingredients = () => {
    const { isLoading, ingredients } = useIngredients()

    return (
        <div className={styles.layout}>
            <Navbar />
            <div className={styles.ingredients}>
                {isLoading
                    ? arrayFrom(5, <SkeletonItemCard />)
                    : ingredients?.data.map((ingredient: IngredientType) => {
                          return (
                              <Link
                                  to={`/ingredients/${ingredient._id}`}
                                  key={ingredient._id}
                              >
                                  <ItemCard
                                      name={ingredient.name}
                                      key={ingredient._id}
                                  />
                              </Link>
                          )
                      })}
            </div>
        </div>
    )
}
export default Ingredients
