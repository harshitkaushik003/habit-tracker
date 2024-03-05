import React from 'react'
import styles from "../styles/HabitItem.module.css"
const HabitItem = ({habit}) => {
  return (
    <div className={styles.habitItem}>
        <div className={styles.status}>
            <img src="https://cdn-icons-png.flaticon.com/128/13680/13680221.png" alt="" />
        </div>
        <div className={styles.name}>
            <span>{habit.name}</span>
        </div>
        <div className={styles.details}>
            <img src="https://cdn-icons-png.flaticon.com/128/1150/1150643.png" alt="" />
        </div>
    </div>
  )
}

export default HabitItem
