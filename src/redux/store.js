import { configureStore } from "@reduxjs/toolkit";
import handleReducer from "./slice"

const store = configureStore({
    reducer: {
        handle : handleReducer
    }
})

export default store