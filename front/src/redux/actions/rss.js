import {GET_X5_RSS} from "./actionTypes";
import axios from "axios";
import ApiClient from "../../services/api";

const ax = new ApiClient();


export function load_rss_x5() {
    return async dispatch => {
        try{
            const response = await axios
                .get('https://l2sb.evilcode.space/php/get_asterios_rss_x5.php');
            let data = response.data;
            dispatch(save_rss_x5(data))
        }
        catch(e){console.log(e)}
    }
}
function save_rss_x5(payload) {
    return {type: GET_X5_RSS, payload};
}