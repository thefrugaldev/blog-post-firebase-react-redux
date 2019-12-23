import { combineReducers } from "redux";
import currentUser from "./firebase-reducer";

const combinedReducers = combineReducers({
  currentUser
});

export default combinedReducers;
