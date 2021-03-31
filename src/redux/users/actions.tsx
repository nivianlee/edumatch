import {
  User,
  ADD_USER,
  DELETE_USER,
  ADD_SELECTED_USER,
  CLEAR_SELECTED_USER,
  UserActionTypes,
} from "./types";

// TypeScript infers that this function is returning AddUserAction
export function addUser(newUser: User): UserActionTypes {
  return {
    type: ADD_USER,
    payload: newUser,
  };
}

// TypeScript infers that this function is returning DeleteUserAction
export function deleteUser(email: string): UserActionTypes {
  return {
    type: DELETE_USER,
    payload: email,
  };
}

// TypeScript infers that this function is returning AddSelectedUserAction
export function addSelectedUser(selectedUser: User): UserActionTypes {
  return {
    type: ADD_SELECTED_USER,
    payload: selectedUser,
  };
}

// TypeScript infers that this function is returning ClearSelectedUserAction
export function clearSelectedUser(): UserActionTypes {
  return {
    type: CLEAR_SELECTED_USER,
  };
}
