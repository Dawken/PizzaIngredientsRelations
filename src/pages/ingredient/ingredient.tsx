import React, { Fragment } from 'react'
import useIngredient from './useIngredient'
import Navbar from '../../components/ui/navbar/navbar'
import styles from './ingredient.module.scss'
import { Button, CircularProgress } from '@mui/material'
import notFound from '../../assets/notFound.png'
import { Link } from 'react-router-dom'
import { PizzaType } from '../../types/pizza'

const Ingredient = () => {
    const { isLoading, ingredient } = useIngredient()

    return (
        <Fragment>
            <Navbar />
            <div className={styles.layout}>
                {isLoading ? (
                    <CircularProgress size={60} />
                ) : (
                    <div className={styles.ingredient}>
                        <div>
                            <img
                                src={notFound}
                                className={styles.ingredientPhoto}
                            ></img>
                            <div className={styles.ingredientName}>
                                {ingredient?.data.name}
                            </div>
                        </div>
                        <div className={styles.ingredientOptions}>
                            Pizzas:
                            <div className={styles.options}>
                                {ingredient?.data.pizzas.map(
                                    (pizzas: PizzaType) => {
                                        return (
                                            <Link
                                                to={`/pizzas/${pizzas._id}`}
                                                key={pizzas._id}
                                            >
                                                <Button
                                                    variant='contained'
                                                    className={styles.option}
                                                >
                                                    {pizzas.name}
                                                </Button>
                                            </Link>
                                        )
                                    }
                                )}
                            </div>
                            Operation:
                            <div className={styles.options}>
                                <Link
                                    to={`/operations/${ingredient?.data.operation._id}`}
                                >
                                    <Button
                                        variant='contained'
                                        className={styles.option}
                                    >
                                        {ingredient?.data.operation.name}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    )
}
export default Ingredient
