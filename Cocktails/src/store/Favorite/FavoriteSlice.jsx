import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState:{
        listFavorites:[]
    },
    reducers:{
        addFavorite : (state,action)=>{
            if(state.listFavorites.find(el => el === action.payload)){return}
            state.listFavorites.push(action.payload)
        }
    }
})
export const addFavoriteAction  = favoriteSlice.actions
export default favoriteSlice.reducer