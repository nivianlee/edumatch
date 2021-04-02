import { User, ADD_USER, CLEAR_USER, UserActionTypes } from "./types";

// TypeScript infers that this function is returning AddUserAction
export function addUser(newUser: User): UserActionTypes {
  return {
    type: ADD_USER,
    payload: newUser,
  };
}

export function clearUser(): UserActionTypes {
  return {
    type: CLEAR_USER,
  };
}
