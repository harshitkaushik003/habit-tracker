import React, { useRef } from 'react'
import styles from "../styles/Home.module.css";
import HabitItem from '../components/HabitItem';
import { useDispatch, useSelector } from 'react-redux';
import { actions, habitSelector } from '../redux/habitReducer';


const Home = () => {
  const {habits} = useSelector(habitSelector);
  const dispatch = useDispatch();
  const nameRef = useRef();
  const handleSubmit = (e)=>{
    e.preventDefault();
    const habit = {
      id: Date.now(),
      name: nameRef.current.value,
      date: Date.now(),
      status: "pending"
    }
    dispatch(actions.addHabit(habit));
    nameRef.current.value = '';
  }
  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <div className={styles.heading}>
          <span>Habit tracker</span>
        </div>
        <div className={styles.form}>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" ref={nameRef} placeholder='Enter a Habit'/>
            <input type="submit" value="Add" />
          </form>
        </div>
      </div>
      <div className={styles.right}>
        {habits.map(habit=>(
          <HabitItem habit={habit}/>
        ))}
      </div>
    </div>
  )
}

export default Home
