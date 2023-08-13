import React, { Fragment } from 'react'
import Navbar from '../../components/ui/navbar/navbar'
import styles from './operation.module.scss'
import { Button, CircularProgress } from '@mui/material'
import notFound from '../../assets/notFound.png'
import { Link } from 'react-router-dom'
import { PizzaType } from '../../types/pizza'
import { IngredientType } from '../../types/ingredient'
import useOperation from './useOperation'

const Ingredient = () => {
    const { isLoading, operation } = useOperation()

    return (
        <Fragment>
            <Navbar />
            <div className={styles.layout}>
                {isLoading ? (
                    <CircularProgress size={60} />
                ) : (
                    <div className={styles.operation}>
                        <div>
                            <img
                                src={notFound}
                                className={styles.operationPhoto}
                            ></img>
                            <div className={styles.operationName}>
                                {operation?.data.name}
                            </div>
                        </div>
                        <div className={styles.operationOptions}>
                            Pizzas:
                            <div className={styles.options}>
                                {operation?.data.pizzas.map(
                                    (pizza: PizzaType) => {
                                        return (
                                            <Link
                                                to={`/pizzas/${pizza._id}`}
                                                key={pizza._id}
                                            >
                                                <Button
                                                    variant='contained'
                                                    className={styles.option}
                                                >
                                                    {pizza.name}
                                                </Button>
                                            </Link>
                                        )
                                    }
                                )}
                            </div>
                            Ingredients:
                            <div className={styles.options}>
                                {operation?.data.ingredients.map(
                                    (ingredient: IngredientType) => {
                                        return (
                                            <Link
                                                to={`/ingredients/${ingredient._id}`}
                                                key={ingredient._id}
                                            >
                                                <Button
                                                    variant='contained'
                                                    className={styles.option}
                                                >
                                                    {ingredient.name}
                                                </Button>
                                            </Link>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    )
}
export default Ingredient
