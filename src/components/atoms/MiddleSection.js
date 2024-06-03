import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion, Reorder, AnimatePresence } from "framer-motion";
import { useStore, useSelector } from "react-redux";

import { Tab } from "../protons/Tab";
import {
  getCurrentTabData,
  getTabsByParams,
  setQsParams,
} from "../../utils/utils";
import { ROUTE_CONSTANTS, URL_CONSTANTS } from "../../constants/url";
import SyntaxLooper from "./SyntaxLooper";
import {
  CURRENT_TAB,
  CURRENT_TAB_DATA,
  SET_MULTIPLE_TABS,
} from "../../redux/actions/actionTypes";
import AnimatedText from "./AnimatedText";
import SpotifyPlaylist from "./SpotifyPlaylist";

export default function MiddleSection() {
  const store = useStore();
  const data = useSelector((state) => state.tabState.tabs);
  const { currentTab } = useSelector((state) => state.currentTab);
  const { currentTabData } = useSelector((state) => state.currentTabData);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]).tab?.split(" ");

  const handleSetTab = (tab) => {
    const route = ROUTE_CONSTANTS.ABOUT;
    setQsParams({ tab, searchParams, store, navigate, route });
  };

  useEffect(() => {
    if (params && params.length > 0) {
      store.dispatch({
        type: SET_MULTIPLE_TABS,
        payload: getTabsByParams(params),
      });
      store.dispatch({
        type: CURRENT_TAB_DATA,
        payload: getCurrentTabData(params[0]),
      });
    }
  }, []);

  const fetchMiddleItem = (tab) => {
    if (tab === URL_CONSTANTS.RANDOM.PLAYLIST) return <SpotifyPlaylist />;
  };

  return (
    <div className="window">
      <div className="middle-nav-section">
        <Reorder.Group
          as="ul"
          axis="x"
          onReorder={data}
          className="tabs-menu"
          values={data}
        >
          <AnimatePresence initial={false}>
            {data.map((item) => (
              <Tab
                key={item.tab}
                item={item}
                isSelected={currentTab === item}
                onClick={() => {
                  store.dispatch({
                    type: CURRENT_TAB,
                    payload: item,
                  });
                  store.dispatch({
                    type: CURRENT_TAB_DATA,
                    payload: getCurrentTabData(item.tab),
                  });
                }}
                onRemove={() => handleSetTab(item)}
              />
            ))}
          </AnimatePresence>
        </Reorder.Group>
      </div>
      <div className="middle-details-section">
        {currentTab.shouldHideCodingContent ? (
          fetchMiddleItem(currentTab.tab)
        ) : (
          <AnimatePresence wait>
            <motion.div
              key={
                Object.keys(currentTab).length > 0 ? currentTab.tab : "empty"
              }
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {Object.keys(currentTab).length > 0 ? (
                <SyntaxLooper currentTabData={currentTabData} />
              ) : (
                <AnimatedText text="Hi!" />
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
