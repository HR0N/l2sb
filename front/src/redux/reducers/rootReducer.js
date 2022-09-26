import {combineReducers} from "redux";
import appReducer from "./App";
import rssReducer from "./rss";

export default combineReducers({
    app: appReducer,
    rss: rssReducer,
});
