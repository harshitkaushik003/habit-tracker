import React from 'react'
import styles from "../styles/HabitItem.module.css"
import { useDispatch } from 'react-redux'
import { actions } from '../redux/habitReducer';
import { Link } from 'react-router-dom';
const HabitItem = ({habit, idx}) => {
  const dispatch = useDispatch();
  //function to toggle only today's status
  function handleToggle(){
    dispatch(actions.toggle({idx:idx, id:0}));
  }
  return (
    <div className={styles.habitItem}>
        <div className={styles.status} onClick={handleToggle}>
            {habit.days[0].status === 'done'
            ?<img src="https://cdn-icons-png.flaticon.com/128/13680/13680221.png" alt="" />
            :(habit.days[0].status === 'none')
            ?<img src="https://cdn-icons-png.flaticon.com/128/6358/6358093.png" alt="" />
            :<img src="https://cdn-icons-png.flaticon.com/128/5709/5709442.png" alt="" />}
        </div>
        <div className={styles.name}>
          <span>{habit.name}</span>  
        </div>
        <div className={styles.details}>
          <Link to={`habits/${habit.id}`} className='link'>
            <img src="https://cdn-icons-png.flaticon.com/128/1150/1150643.png" alt="" />
          </Link>
        </div>
    </div>
  )
}

export default HabitItem
