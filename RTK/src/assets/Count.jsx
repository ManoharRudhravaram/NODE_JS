import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decHandler, incHandler } from '../redux/slice/countSlice';
function Count() {
    
    let {inc,dec} = useSelector((item) => {
        return item.count
    })
    let dispatch = useDispatch()

    return (
        <>
            <h3 className='text-center'>count</h3>
            <hr />
            <h3>inc:{inc}</h3>
            <h3>dec:{dec}</h3>
            <div>
                <button onClick={()=>{dispatch(decHandler(1))}}>dec</button>
                <button onClick={()=>{dispatch(incHandler())}}>inc</button>
            </div>
        </>

    )
}

export default Count