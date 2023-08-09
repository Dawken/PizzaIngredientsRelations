import React from 'react'
import styles from './navbar.module.scss'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarList}>
                <Link to={'/'} className={styles.listOption}><LocalPizzaIcon />Pizza</Link>
                <Link to={'/operations'} className={styles.listOption}><RestaurantMenuIcon />Operations</Link>
                <Link to={'/ingredients'} className={styles.listOption}><BreakfastDiningIcon />Ingredients</Link>
            </div>
        </nav>
    )
}
export default Navbar
