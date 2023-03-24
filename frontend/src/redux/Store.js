import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { TaskReducer } from "./reducer";
const rootReducer = combineReducers({
  task: TaskReducer,
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
