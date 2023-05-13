import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const FetchData = createAsyncThunk('create/app', async ()=>{
    try {
        const res = await axios.get('https://randomuser.me/api/?results=5');
        const users = res.data
        return users
    } catch (error) {
        return error.message;
    }
})
const user = createSlice({
    name:'New',
    initialState: {
        user: [],
        isloading:true,
        error: undefined,
    },
    extraReducers(builder){
        builder
        .addCase(FetchData.pending, (state)=>{
            state.isloading = 'Loading....'
        })
        .addCase(FetchData.fulfilled, (state, action)=>{
            return {
                isloading: "Successful",
                user: action.payload.results,
            }
        })
        .addCase(FetchData.rejected, (state, action)=>{
            state.status = "Failed"
            state.error = action.error.message;
        })
    }
})
export default user.reducer;