import axios from "axios";

//INITIAL STATE
const initialState = {
  propertyName: "",
  address: "",
  city: "",
  state: "",
  zip: ""
};

//CONSTANTS (ACTION TYPES)
const UPDATE_PROPERTYNAME = "UPDATE_PROPERTYNAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";

//REDUCER

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROPERTYNAME:
      return {
        ...state,
        propertyName: action.payload
      };

    case UPDATE_ADDRESS:
      return {
        ...state,
        address: action.payload
      };

    case UPDATE_CITY:
      return {
        ...state,
        city: action.payload
      };

    case UPDATE_STATE:
      return {
        ...state,
        state: action.payload
      };

    case UPDATE_ZIP:
      return {
        ...state,
        zip: action.payload
      };
  }
}

//ACTION CREATORS

export function updatePropertyName(propertyName) {
  return {
    type: UPDATE_PROPERTYNAME,
    payload: propertyName
  };
}

export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}
export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updateState(state) {
  return {
    type: UPDATE_STATE,
    payload: state
  };
}
export function updateZip(zip) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  };
}

export default reducer;
