import { createSlice } from "@reduxjs/toolkit";

//initial state 
const initialState = {
    habits: []
}

const habitSlice = createSlice({
    name: 'habit',
    initialState,
    reducers: {
        //add a habit by pushing the payload
        addHabit: (state, action)=>{
            state.habits.push(action.payload);
        },
        toggle: (state, action)=>{
            //getting the current status of the habit
            //idx is the habit index and id is the index of the day (today-0)
            const status = state.habits[action.payload.idx].days[action.payload.id].status;
            // if current status is pending then set to done 
            if(status === 'pending'){
                state.habits[action.payload.idx].days[action.payload.id].status = 'done';
            }else if(status === 'done'){
                // if done, set to none 
                state.habits[action.payload.idx].days[action.payload.id].status = 'none';
            }
            else{
                // elsewhere set to pending 
                state.habits[action.payload.idx].days[action.payload.id].status = 'pending';
            }
        }
    }
})

const habitReducer = habitSlice.reducer;
const actions = habitSlice.actions;
const habitSelector = (state)=>state.habitReducer;

export {habitReducer, habitSelector, actions}

