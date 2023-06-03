import { combineReducers } from "redux";

import postReducer from "./post/reducer";

const rootReducers = combineReducers({
  post: postReducer,
});

export type AppState = ReturnType<typeof rootReducers>;

export default rootReducers;
