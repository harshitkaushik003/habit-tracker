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
        }
    }
})

const habitReducer = habitSlice.reducer;
const actions = habitSlice.actions;
const habitSelector = (state)=>state.habitReducer;

export {habitReducer, habitSelector, actions}

