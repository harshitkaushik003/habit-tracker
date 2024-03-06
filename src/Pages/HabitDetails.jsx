import React from 'react'
import styles from "../styles/HabitDetails.module.css";
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { habitSelector } from '../redux/habitReducer';
import DayCard from '../components/DayCard';

const HabitDetails = () => {
    const {id} = useParams();
    const {habits} = useSelector(habitSelector);
    const habit = habits.find(item => item.id === parseInt(id));
    const habitIndex = habits.findIndex(item => item.id === parseInt(id));

    return (
        <div className={styles.detailsMain}>
            <div className={styles.top}>
                <div className={styles.heading}>
                    <span>Habit Details</span>
                </div>
                <div className={styles.text}>
                    <span>{habit.name}</span>
                </div>
            </div>
            <div className={styles.bottom}>
                {habit.days.map((day, index) => (
                    <DayCard day={day} idx={index} habitIndex={habitIndex}/>
                ))}
            </div>
        </div>
    )
}

export default HabitDetails
