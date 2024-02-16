import { createStore, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import { alphabet } from "../../service/tools/tools";
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "../../service/tools/request_types";
import {fetchByLetter} from "../../service/requests/requests";
import {createSlice} from "@reduxjs/toolkit";

export const cocktailsSlice = createSlice({
    name: 'fetchCocktails',
    initialState:{
        loading: false,
        cocktails: [],
        error: null,
        letters: alphabet(),
        currentLetter: alphabet()[0]
    },
    reducers:{
        allCocktails : (state,action)=>{
            switch (action.type) {
                case FETCH_DATA_REQUEST:
                    return { ...state, loading: true };
                case FETCH_DATA_SUCCESS:
                    return { ...state, loading: false, cocktails: action.payload };
                case FETCH_DATA_ERROR:
                    return { ...state, loading: false, error: action.payload };
            }
        }
    }
})

export const {allCocktails}  = cocktailsSlice.actions
export default cocktailsSlice.reducer

