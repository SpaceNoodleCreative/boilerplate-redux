import { combineReducers } from "redux";
import emptyReducer from "./emptyReducer";

const rootReducer = combineReducers({
  emptyState: emptyReducer
});

export default rootReducer;
