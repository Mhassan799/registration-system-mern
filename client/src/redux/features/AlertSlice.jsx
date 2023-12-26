// import {createSlice} from '@readuxjs/toolkit'
import {  createSlice } from '@reduxjs/toolkit'
import Spinner from '../../components/Spinner/Spinner'



export const alertSlice = createSlice({
    name : "alerts",
    initialState:{
        loading:false
    },
    reducers:{
        showLoading: (state) =>{
            state.loading = true
           
        },
        hideLoading: (state) =>{
            state.loading = false
        }
    }
})


export const {showLoading,hideLoading} = alertSlice.actions