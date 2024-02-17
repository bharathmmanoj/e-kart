import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        // actions
        // function logic to add item
        addTowishlist:(state,action)=>{
            state.push(action.payload)
            
        }

    }
})
export const {addTowishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer