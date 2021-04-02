import {
  UserState,
  UsersState,
  UserActionTypes,
  ADD_USER,
  DELETE_USER,
  ADD_SELECTED_USER,
  CLEAR_SELECTED_USER,
  CLEAR_USER,
} from "./types";

const initialUsersState: UsersState = {
  users: [],
};

const initialUserState: UserState = {
  user: {},
};

export function usersReducer(
  state = initialUsersState,
  action: UserActionTypes
): UsersState {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      return {
        users: state.users.filter((user) => user !== action.payload),
      };
    default:
      return state;
  }
}

export function userReducer(
  state = initialUserState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case ADD_USER:
      return {
        user: action.payload,
      };
    case CLEAR_SELECTED_USER:
      return initialUserState;
    case CLEAR_USER:
      return initialUserState;
    default:
      return state;
  }
}
