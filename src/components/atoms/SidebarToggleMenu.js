import React, { useState } from "react";
import { motion } from "framer-motion";
import { useStore } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  getCurrentTabData,
  setQsParams,
  setToggleMenu,
} from "../../utils/utils";
import { ROUTE_CONSTANTS } from "../../constants/url";
import { CURRENT_TAB, CURRENT_TAB_DATA } from "../../redux/actions/actionTypes";

function SidebarToggleMenu({ data }) {
  const [activeToggle, setActiveToggle] = useState(new Set());
  const store = useStore();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSetTab = (tab) => {
    const route = ROUTE_CONSTANTS.ABOUT;
    store.dispatch({
      type: CURRENT_TAB,
      payload: tab,
    });
    store.dispatch({
      type: CURRENT_TAB_DATA,
      payload: getCurrentTabData(tab.tab),
    });
    setQsParams({ tab, searchParams, store, navigate, route });
  };

  return (
    <div className="sidebar">
      {data.map((m, i) => {
        return (
          <motion.div layout className="toggle" key={i}>
            <motion.div
              layout
              className="toggle-heading"
              onClick={() => {
                setToggleMenu(setActiveToggle, m);
                if (!m.isExpandable) {
                  store.dispatch({
                    type: CURRENT_TAB,
                    payload: m,
                  });
                  store.dispatch({
                    type: CURRENT_TAB_DATA,
                    payload: getCurrentTabData(m.tab),
                  });
                  const route = ROUTE_CONSTANTS.ABOUT;
                  setQsParams({
                    tab: m,
                    searchParams,
                    store,
                    navigate,
                    route,
                  });
                }
              }}
            >
              <span>{m.emoji}</span>
              <h4 className="text-heading"> {m.title}</h4>
              {m.content && (
                <i
                  className={`ri-arrow-down-s-line toggle-arrow ${
                    activeToggle.size > 0 && activeToggle.has(m.title)
                      ? "open"
                      : ""
                  }`}
                ></i>
              )}
            </motion.div>
            {m.content &&
              m.content.map((c, i) => (
                <motion.div
                  layout
                  className={`child-toggle ${
                    activeToggle.size > 0 && activeToggle.has(m.title)
                      ? ""
                      : "hide"
                  }`}
                  key={i}
                  onClick={() => handleSetTab(c)}
                >
                  <motion.div layout className="child-toggle-item" key={i}>
                    {c.emoji} {c.title}
                  </motion.div>
                </motion.div>
              ))}
          </motion.div>
        );
      })}
    </div>
  );
}

export default SidebarToggleMenu;
