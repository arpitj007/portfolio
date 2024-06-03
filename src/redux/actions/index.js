import {
  ALL_TABS,
  SET_TAB,
  SET_MULTIPLE_TABS,
  CURRENT_TAB,
  CURRENT_TAB_DATA,
  FORM_DATA,
  MOBILE_ACTIVE_TAB,
} from "./actionTypes";

export function allTabs(payload) {
  return {
    type: ALL_TABS,
    payload,
  };
}

export function setTab(payload) {
  return {
    type: SET_TAB,
    payload,
  };
}

export function setMultipleTabs(payload) {
  return {
    type: SET_MULTIPLE_TABS,
    payload,
  };
}

export function currentTab(payload) {
  return {
    type: CURRENT_TAB,
    payload,
  };
}

export function currentTabData(payload) {
  return {
    type: CURRENT_TAB_DATA,
    payload,
  };
}

export function formData(payload) {
  return {
    type: FORM_DATA,
    payload,
  };
}

export function mobileActiveTab(payload) {
  return {
    type: MOBILE_ACTIVE_TAB,
    payload,
  };
}
