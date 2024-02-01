import axios from "axios";
import {requestAPIByLetter} from "../API/requestAPI";
export function alphabet(){
    const arr = 'abcdefghijklmnopqrstuvwxyz'.split('')
    return arr;
}