import {GET_X1_RSS, GET_X1d5_RSS, GET_X5_RSS} from "./actionTypes";
import axios from "axios";
import ApiClient from "../../services/api";

const ax = new ApiClient();


/*  get data from intermediate php - x1 rss*/
export function load_rss_x1() {
    return async dispatch => {
        try{
            const response = await axios
                .get('https://l2lb.monster/php/get_asterios_rss_x1.php');
            let data = response.data;
            dispatch(save_rss_x1(data))
        }
        catch(e){console.log(e)}
    }
}
function save_rss_x1(payload) {
    return {type: GET_X1_RSS, payload};
}


/*  get data from intermediate php - x1.5 rss*/
export function load_rss_x1d5() {
    return async dispatch => {
        try{
            const response = await axios
                .get('https://l2lb.monster/php/get_asterios_rss_x1d5.php');
            let data = response.data;
            dispatch(save_rss_x1d5(data))
        }
        catch(e){console.log(e)}
    }
}
function save_rss_x1d5(payload) {
    return {type: GET_X1d5_RSS, payload};
}


/*  get data from intermediate php - x5 rss*/
export function load_rss_x5() {
    return async dispatch => {
        try{
            const response = await axios
                .get('https://l2lb.monster/php/get_asterios_rss_x5.php');
            let data = response.data;
            dispatch(save_rss_x5(data))
        }
        catch(e){console.log(e)}
    }
}
function save_rss_x5(payload) {
    return {type: GET_X5_RSS, payload};
}