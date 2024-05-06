import { createSlice } from "@reduxjs/toolkit";

let countSlice=createSlice({
    name:"count",
    initialState:{inc:1,dec:10},
    reducers:{
        incHandler(state,action){
               state.inc=state.inc+1
        },
        decHandler(state,action){
          state.dec=state.dec-action.payload
        }
    }
})
export let {incHandler,decHandler}=countSlice.actions
export default countSlice