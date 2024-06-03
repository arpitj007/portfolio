import { ROUTE_CONSTANTS, URL_CONSTANTS } from "../constants/url";
import { FORM_DATA, SET_TAB } from "../redux/actions/actionTypes";
import {
  aboutMe,
  trustCloud,
  quloi,
  indianic,
  freelance,
  dataPersonal,
  education,
} from "../constants/about-me";

const CAREER_START_DATE = new Date("2019-04-01");

export const removeItem = ([...arr], item) => {
  return arr.filter((i) => i.tab !== item.tab);
};

export const closestItem = (arr, item) => {
  const index = arr.indexOf(item);
  if (index === -1) {
    return arr[0];
  } else if (index === arr.length - 1) {
    return arr[arr.length - 2];
  } else {
    return arr[index + 1];
  }
};

export const setQsParams = ({ tab, searchParams, store, navigate, route }) => {
  const qs = searchParams.get("tab")?.split(" ");
  const newQs = (
    qs?.includes(tab.tab)
      ? qs.filter((q) => q !== tab.tab)
      : [...(qs || []), tab.tab]
  ).join("+");
  store.dispatch({ type: SET_TAB, payload: tab });
  navigate({
    pathname: route,
    search: `${newQs ? `?tab=${newQs}` : ""}`,
  });
};

export const getTab = (item) => {
  let tab = {};
  dataPersonal.map((x) => {
    if (x.isExpandable) {
      x.content.map((y) => {
        if (y.tab === item) tab = y;
        return false;
      });
    } else {
      if (x.tab === item) tab = x;
    }
    return false;
  });
  return tab;
};

export const getCurrentTabData = (item) => {
  switch (item) {
    case URL_CONSTANTS.BIO:
      return aboutMe;
    case URL_CONSTANTS.WORK.TRUSTCLOUD:
      return trustCloud;
    case URL_CONSTANTS.WORK.QULOI:
      return quloi;
    case URL_CONSTANTS.WORK.INDIANIC:
      return indianic;
    case URL_CONSTANTS.WORK.FREELANCE:
      return freelance;
    case URL_CONSTANTS.EDUCATION:
      return education;
    case URL_CONSTANTS.RANDOM.PLAYLIST:
      return [{ component: "SpotifyPlaylist", props: {} }];
    case URL_CONSTANTS.RANDOM.MOVIES:
      return;
    case URL_CONSTANTS.RANDOM.CHESS:
      return;
    case URL_CONSTANTS.RANDOM.PS5:
      return;
    default:
      return;
  }
};

export const getTabsByParams = (tabs) => {
  const returnTabs = {};
  tabs.map((x) => (returnTabs[x] = getTab(x)));
  return returnTabs;
};

export const setToggleMenu = (setActiveToggle, tab) => {
  if (!tab.isExpandable) return;
  setActiveToggle((prevState) => {
    const newState = prevState;
    if (newState.size > 0 && newState.has(tab.title)) {
      newState.delete(tab.title);
    } else {
      newState.add(tab.title);
    }
    return new Set(newState);
  });
};

export function monthDiff(d2 = new Date(), d1 = CAREER_START_DATE) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

export function resetReduxStateOnPageChange(store, page) {
  const dataToReset = [];

  switch (page) {
    case ROUTE_CONSTANTS.CONTACT:
      const contactState = { type: null, payload: null };
      contactState.payload = {
        name: "",
        email: "",
        message: "",
      };
      contactState.type = FORM_DATA;
      dataToReset.push(contactState);
      break;
    default:
      return;
  }
  dataToReset.length > 0 && dataToReset.map((x) => store.dispatch(x));
}
