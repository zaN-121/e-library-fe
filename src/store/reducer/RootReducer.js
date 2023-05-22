import {combineReducers} from "@reduxjs/toolkit";
import bookReducer from "./BookReducer";

const rootReducer = combineReducers({
    book: bookReducer
})

export default rootReducer