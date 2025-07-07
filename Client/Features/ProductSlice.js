import {createSlice,nanoid} from "@reduxjs/toolkit"
import { useState } from "react"







const initialState = {
product:[
    {id:1,
    title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" ,
     image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    price:200,
}]
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        add:(state,action)=>{
            product:[
                {id:1,
                title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" ,
                 image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                price:200,
            }]
         
            //     state.todos.unshift(todo)
        

        console.log("staate",state);
        
        },
        remove:(state,action)=>{
        }

    }
})

export const {product}= productSlice.actions
export default productSlice.reducer