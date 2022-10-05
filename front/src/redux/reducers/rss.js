import {GET_X1_RSS, GET_X1d5_RSS, GET_X5_RSS} from "../actions/actionTypes";

const initialState = {
    rss_x1: false,
    rss_x1d5: false,
    rss_x5: false,
};

export default function rssReducer(state = initialState, action) {
    switch (action.type) {
        case GET_X1_RSS:    return {...state, rss_x1: action.payload };
        case GET_X1d5_RSS:  return {...state, rss_x1d5: action.payload };
        case GET_X5_RSS:    return {...state, rss_x5: action.payload };
        default: return state;
    }
}