import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState={
    loading:true,
    data:[],
    error:''
}

//this is async thunk for fetching data
export const fetchData=createAsyncThunk('myslice/fetchData',async()=>{
    try{
        const res= await fetch('https://jsonplaceholder.typicode.com/todos')
        let data= await res.json()
        return data;
    }
    catch(err)
    {
        throw err
    }
})
let getDataSlice=createSlice({
       name:'myslice',
       initialState,
       reducers:{},
       extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.loading=true
        }).addCase(fetchData.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
        }).addCase(fetchData.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
       }
})

export default getDataSlice