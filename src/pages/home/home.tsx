import React from 'react'
import styles from './home.module.scss'
import Navbar from '../../components/ui/navbar/navbar'


const Home = () => {
    return (
        <div className={styles.layout}>
            <Navbar />
        </div>
    )
}
export default Home
