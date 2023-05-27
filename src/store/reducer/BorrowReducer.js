import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {getBorrow, getBorrowHistory} from "../../services/borrowApi";

export const fetchTakenBorrow = createAsyncThunk("fetch/borrow", async (params) => {
    try {
        const {data: {data: canBeTake}} = await getBorrow({state: "canbetake"})
        const {data: {data: taken}} = await getBorrow({state: "taken"})
        const {data: {data: late}} = await getBorrow({state: "late"})
        const {data: {data: history }} = await getBorrowHistory()

        return {
            canBeTake,
            taken,
            late,
            history
        }
    } catch (e) {
        throw Error(e.message());
    }

})

const initialState = {
    canBeTake: [],
    taken:[],
    late: [],
    history:[],
    loading: false,
    error: ""
}

const borrowTakenReducer = createSlice({
    name: "taken",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTakenBorrow.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchTakenBorrow.fulfilled, (state, action) => {
            state.loading = false
            state.canBeTake = [...action.payload.canBeTake]
            state.taken = [...action.payload.taken]
            state.late = [...action.payload.late]
            state.history = [...action.payload.history]
        })
        builder.addCase(fetchTakenBorrow.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default borrowTakenReducer.reducer
