import { combineReducers } from "redux";
import { userReducer } from "./users/reducers";

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
