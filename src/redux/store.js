import { configureStore } from "@reduxjs/toolkit";
import { habitReducer } from "./habitReducer";
export const store = configureStore({
    reducer: {
        habitReducer
    }
})