import * as actionTypes from "../actions/types";

// set users list
export const setData = (data) => {
  return {
    type: actionTypes.SET_DATA_LIST,
    payload: {
      loadedData: data,
    },
  };
};

// select page
export const onPageSelected = (id) => {
  return {
    type: actionTypes.SET_PAGE_NUMBER,
    payload: {
      pageNumber: id,
    },
  };
};

// load data current user
export const loadCurrentUser = (data) => {
  return {
    type: actionTypes.LOAD_USER,
    payload: {
      currentUserData: data,
    },
  };
};

// clean data current user
export const cleanUserData = () => {
  return {
    type: actionTypes.CLEAN_USER,
  };
};
