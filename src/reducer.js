import * as actionTypes from "./actions/types";
import { combineReducers } from "redux";

const initionalDataState = {
  loadedData: [],
  userPerPageCount: "",
  totalUsersCount: "",
  totalPagesCount: "",
  selectedPageNumber: 1,
  isloadingData: true,
};

// data for loading user list and pagination
const data_reducer = (state = initionalDataState, { payload, type }) => {
  // start with (state = initionalDataState, action)
  switch (type) {
    case actionTypes.SET_DATA_LIST:
      return {
        ...state,
        loadedData: payload.loadedData.data,
        isloadingData: false,
        selectedPageNumber: payload.loadedData.page,
        userPerPageCount: payload.loadedData.per_page,
        totalUsersCount: payload.loadedData.total,
        totalPagesCount: payload.loadedData.total_pages,
      };

    case actionTypes.SET_PAGE_NUMBER:
      return {
        ...state,
        isloadingData: true,
        selectedPageNumber: payload.pageNumber,
      };

    default:
      return state;
  }
};

const initionalCurrentUserState = {
  currentUserData: {},
  isloadingUserData: true,
};

// data corresponse current user loading on user-button click and clean data if newuser-button was chosed
const user_reducer = (state = initionalCurrentUserState, { payload, type }) => {
  switch (type) {
    case actionTypes.LOAD_USER:
      return {
        ...state,
        currentUserData: payload.currentUserData.data,
        isloadingUserData: false,
      };

    case actionTypes.CLEAN_USER:
      return {
        ...state,
        currentUserData: {
          avatar: "",
          email: "",
          first_name: "",
          id: 9999,
          last_name: "",
        },
        isloadingUserData: false,
      };

    default:
      return state;
  }
};

const RootReducer = combineReducers({
  data: data_reducer,
  currentUser: user_reducer,
});

export default RootReducer;
