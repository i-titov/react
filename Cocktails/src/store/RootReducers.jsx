import {combineReducers} from '@reduxjs/toolkit';
import favoriteSlice from './Favorite/FavoriteSlice'
import allCocktailsSlice from "./Cocktails/AllCocktailsSlice";

const rootReducers =  combineReducers ({
     allCocktails : allCocktailsSlice,
     addFavorite: favoriteSlice
})

export default rootReducers