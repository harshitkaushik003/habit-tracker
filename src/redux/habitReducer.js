import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habits: []
}

const habitSlice = createSlice({
    name: 'habit',
    initialState,
    reducers: {
        addHabit: (state, action)=>{
            state.habits.push(action.payload);
        },
        toggle: (state, action)=>{
            const status = state.habits[action.payload.idx].days[action.payload.id].status;
            if(status === 'pending'){
                state.habits[action.payload.idx].days[action.payload.id].status = 'done';
            }else if(status === 'done'){
                state.habits[action.payload.idx].days[action.payload.id].status = 'none';
            }
            else{
                state.habits[action.payload.idx].days[action.payload.id].status = 'pending';
            }
        }
    }
})

const habitReducer = habitSlice.reducer;
const actions = habitSlice.actions;
const habitSelector = (state)=>state.habitReducer;

export {habitReducer, habitSelector, actions}

