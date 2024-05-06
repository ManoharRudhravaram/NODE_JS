import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/slice/fetchSlice'

function FetchData() {
   let data= useSelector((data)=>{
        return data.fetch
    })
    console.log('hello data',data)
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchData())
    },[])
  return (
    <div>FetchData</div>
  )
}

export default FetchData