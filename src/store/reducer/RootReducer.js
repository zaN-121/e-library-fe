import {combineReducers} from "@reduxjs/toolkit";
import bookReducer from "./BookReducer";
import borrowCanBeTakenReducer from "./BorrowReducer";

const rootReducer = combineReducers({
    book: bookReducer,
    borrow: borrowCanBeTakenReducer
})

export default rootReducer