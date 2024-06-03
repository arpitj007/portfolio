import { combineReducers } from "@reduxjs/toolkit";

import {
  ALL_TABS,
  SET_TAB,
  SET_MULTIPLE_TABS,
  CURRENT_TAB,
  CURRENT_TAB_DATA,
  FORM_DATA,
  MOBILE_ACTIVE_TAB,
  RESET_TABS,
} from "./actions/actionTypes";

const date = new Date().getDate();

const initialState = {
  tabs: [],
};
const currentTabState = {
  currentTab: {},
};
const currentTabDataState = {
  currentTabData: {},
};
const formDataState = {
  formData: {
    name: "",
    email: "",
    message: "",
    date,
  },
};
const mobileActiveTabState = {
  mobileActiveTab: {},
};

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_TABS:
      return {
        ...state,
        tabs: action.payload,
      };
    case SET_TAB:
      return {
        ...state,
        tabs: state.tabs.includes(action.payload)
          ? state.tabs.filter((tab) => tab !== action.payload)
          : [...state.tabs, action.payload],
      };
    case SET_MULTIPLE_TABS:
      return {
        ...state,
        tabs: [...state.tabs, Object.values(action.payload)].flat(),
      };
    default:
      return state;
  }
};

const currentTabReducer = (state = currentTabState, action) => {
  switch (action.type) {
    case CURRENT_TAB:
      return {
        ...state,
        currentTab: action.payload,
      };
    default:
      return state;
  }
};

const currentTabDataReducer = (state = currentTabDataState, action) => {
  switch (action.type) {
    case CURRENT_TAB_DATA:
      return {
        ...state,
        currentTabData: action.payload,
      };
    default:
      return state;
  }
};

const formDataReducer = (state = formDataState, action) => {
  switch (action.type) {
    case FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

const mobileActiveTabReducer = (state = mobileActiveTabState, action) => {
  switch (action.type) {
    case MOBILE_ACTIVE_TAB:
      return {
        ...state,
        mobileActiveTab: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tabState: tabsReducer,
  currentTab: currentTabReducer,
  currentTabData: currentTabDataReducer,
  formData: formDataReducer,
  mobileActiveTab: mobileActiveTabReducer,
});

export default rootReducer;
