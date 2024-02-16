import axios from "axios";
import {FETCH_DATA_ERROR, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_NEW_PAGE} from "../tools/request_types";
import {urlApiById,urlApiByLetter} from "../urls/urls_api";

export const fetchByLetter = (letter) => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        console.log(dispatch)
        axios.get(urlApiByLetter(letter))
            .then(response => {
                dispatch(fetchDataSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchDataError(error.message));
            });
    };
};

const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
});

const fetchDataSuccess = (cocktails) => ({
    type: FETCH_DATA_SUCCESS,
    payload: cocktails
});

const fetchDataError = (error) => ({
    type: FETCH_DATA_ERROR,
    payload: error
});