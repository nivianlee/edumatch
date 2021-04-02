import { UserState, UserActionTypes, ADD_USER, CLEAR_USER } from "./types";

const initialUserState: UserState = {
  user: {},
};

export function userReducer(
  state = initialUserState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case ADD_USER:
      return {
        user: action.payload,
      };
    case CLEAR_USER:
      return initialUserState;
    default:
      return state;
  }
}
