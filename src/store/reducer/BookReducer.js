import {createSlice} from "@reduxjs/toolkit";

const books = [
    {

    }
]

const bookReducer = createSlice({
    name: "books",
    initialState: books,
    reducers: {
        setBooks: (state, action) => {
            return state = [
                ...action.payload
            ]
        }
    }
})

export default bookReducer.reducer
export const {setBooks} = bookReducer.actions