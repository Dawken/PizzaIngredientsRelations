import React, { Fragment } from 'react'
import usePizza from './usePizza'
import Navbar from '../../components/ui/navbar/navbar'
import styles from './pizza.module.scss'
import notFound from '../../assets/notFound.png'
import { IngredientType } from '../../types/ingredient'
import { OperationType } from '../../types/operation'
import { Button, CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'

const Pizza = () => {
    const { pizza, isLoading } = usePizza()

    return (
        <Fragment>
            <Navbar />
            <div className={styles.layout}>
                {isLoading ? (
                    <CircularProgress size={60} />
                ) : (
                    <div className={styles.pizza}>
                        <div>
                            <img
                                src={notFound}
                                className={styles.pizzaPhoto}
                            ></img>
                            <div className={styles.pizzaName}>
                                {pizza?.data.pizzaName}
                            </div>
                        </div>
                        <div className={styles.pizzaOptions}>
                            Ingredients:
                            <div className={styles.options}>
                                {pizza?.data.ingredients.map(
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
                                                    {ingredient.ingredientName}
                                                </Button>
                                            </Link>
                                        )
                                    }
                                )}
                            </div>
                            Operations:
                            <div className={styles.options}>
                                {pizza?.data.operations.map(
                                    (operation: OperationType) => {
                                        return (
                                            <Link
                                                to={`/operations/${operation._id}`}
                                                key={operation._id}
                                            >
                                                <Button
                                                    variant='contained'
                                                    className={styles.option}
                                                >
                                                    {operation.operationName}
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
export default Pizza
