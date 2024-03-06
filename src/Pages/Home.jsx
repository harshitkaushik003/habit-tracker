import React, { useRef } from 'react'
import styles from "../styles/Home.module.css";
import HabitItem from '../components/HabitItem';
import { useDispatch, useSelector } from 'react-redux';
import { actions, habitSelector } from '../redux/habitReducer';

const Home = () => {
  //setting the hooks
  const {habits} = useSelector(habitSelector);
  const dispatch = useDispatch();
  const nameRef = useRef();

  // function to format the date into a particular format 
  function formatDate(date){
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${day}-${month}-${year}`;
  }

  //fetching today's date
  const today = new Date();

  //handling submit of the form
  const handleSubmit = (e)=>{
    e.preventDefault();

    const days = [];

    //first element of days array is today
    days.push({
      date: formatDate(today),
      status: 'none'
    });

    // filling previous 6 days 
    for(let i=1; i<=6; i++){
      const prevDay = new Date();
      prevDay.setDate(today.getDate() - i);
      days.push({
        date: formatDate(prevDay),
        status: 'none'
      })
    }

    // setting the habit for pushing into reducer state 
    const habit = {
      id: Date.now(),
      name: nameRef.current.value,
      days: days
    }

    //dispatching current action
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
            <input type="text" ref={nameRef} placeholder='Enter a Habit' required/>
            <input type="submit" value="Add" />
          </form>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.date}>
          <span>{formatDate(today)}</span>
        </div>
        {habits.map((habit, index)=>(
            <HabitItem habit={habit} idx={index}/>
        ))}
      </div>
    </div>
  )
}

export default Home
