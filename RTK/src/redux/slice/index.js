import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import countSlice from './countSlice'
import getDataSlice from './fetchSlice'


const store = configureStore({
    reducer: { count: countSlice.reducer,fetch:getDataSlice.reducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk),
    devTools: true
})

export default store