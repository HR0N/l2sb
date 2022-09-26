import {GET_X5_RSS} from "../actions/actionTypes";

const initialState = {
    rss_x5: false,
};

export default function rssReducer(state = initialState, action) {
    switch (action.type) {
        case GET_X5_RSS: return {...state, rss_x5: action.payload };
        default: return state;
    }
}