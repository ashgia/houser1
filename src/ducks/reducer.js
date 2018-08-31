import axios from "axios";

const initialState = {
  username: "",
  password: "",
  houses: []
};

const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return Object.assign({}, state, { username: action.payload });

    case UPDATE_PASSWORD:
      return Object.assign({}, state, { password: action.payload });

    case LOGIN:
    // return Object.assign({}, state, { login: action.payload });

    case REGISER:
    // return Object.assign({}, state, { loanType: action.payload });
  }
}

export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    payload: username
  };
}

export function updatePassword(password) {
  return {
    type: UPDATE_PASSWORD,
    payload: password
  };
}

export default reducer;
