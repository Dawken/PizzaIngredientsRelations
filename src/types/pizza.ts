import { OperationType } from './operation'
import { IngredientType } from './ingredient'

export type PizzaType = {
    ingredients: [string | IngredientType]
    operations: [string | OperationType]
    pizzaName: string
    _id: string
}
