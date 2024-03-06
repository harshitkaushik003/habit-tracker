import React from 'react'
import styles from "../styles/DayCard.module.css"
import { useDispatch } from 'react-redux'
import { actions } from '../redux/habitReducer';
const DayCard = ({day, idx, habitIndex}) => {
    const dispatch = useDispatch();
    function handleToggle(){
        dispatch(actions.toggle({idx: habitIndex, id: idx}));
    }
  return (
    <div className={styles.dayCard}>
        <div className={styles.date}>
            <img src="https://cdn-icons-png.flaticon.com/128/15092/15092603.png" alt="" />
            <span>{day.date}</span>
        </div>
        <div className={styles.status} onClick={handleToggle}>
            {day.status === 'done' 
            ? <img src="https://cdn-icons-png.flaticon.com/128/8358/8358886.png" alt="" />
            : (day.status === 'none')
            ?<img src="https://cdn-icons-png.flaticon.com/128/6358/6358093.png" alt="" />
            :<img src="https://cdn-icons-png.flaticon.com/128/5709/5709442.png" alt="" />}
        </div>
    </div>
  )
}

export default DayCard
