import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "react-redux";

import { setToggleMenu } from "../utils/utils";
import { MOBILE_ACTIVE_TAB } from "../redux/actions/actionTypes";

function MobileMenu({ data }) {
  const store = useStore();
  const [activeToggle, setActiveToggle] = useState(new Set());

  const handleToggle = (item) => {
    setToggleMenu(setActiveToggle, item);
    if (!item.isExpandable) {
      store.dispatch({
        type: MOBILE_ACTIVE_TAB,
        payload: item,
      });
    }
  };

  return (
    <div className="mobile-menu">
      {data.map((item, index) => (
        <div key={index} style={{ width: "100%" }}>
          <motion.div
            className="mobile-menu__item"
            onClick={() => handleToggle(item)}
          >
            <h4 className="mobile-menu__item-heading">{item.title}</h4>
            {item.isExpandable && (
              <i
                className={`toggle-arrow ri-arrow-down-s-line ${
                  activeToggle.size > 0 && activeToggle.has(item.title)
                    ? "open"
                    : ""
                }`}
              />
            )}
          </motion.div>
          <AnimatePresence wait>
            {activeToggle.size > 0 && activeToggle.has(item.title) && (
              <motion.div
                className="mobile-menu__toggle-items"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.5 }}
                onExitComplete={() =>
                  setActiveToggle(
                    (prev) =>
                      new Set([...prev].filter((title) => title !== item.title))
                  )
                }
              >
                {item.content &&
                  item.content.map((content, index) => (
                    <div
                      key={index}
                      className="mobile-menu__toggle-item"
                      onClick={() => {
                        store.dispatch({
                          type: MOBILE_ACTIVE_TAB,
                          payload: content,
                        });
                      }}
                    >
                      <h5 className="mobile-menu__toggle-item-heading">
                        {content.title}
                      </h5>
                    </div>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default MobileMenu;
