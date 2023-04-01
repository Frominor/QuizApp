import { createStore, applyMiddleware, combineReducers } from "redux";
import { QuizReducer } from "./QuizReducer";
const rootReducer = combineReducers({
  QuizReducer,
});
export const store = createStore(rootReducer, applyMiddleware());
