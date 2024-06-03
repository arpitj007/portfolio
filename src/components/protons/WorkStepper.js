import React from "react";
import { motion } from "framer-motion";
import { Steps } from "antd";

import MediumHeading from "../atoms/MediumHeading";

function WorkStepper({ itemArray = [], title = "Title" }) {
  return (
    <div className="medium-heading__container">
      <MediumHeading text={title} />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Steps direction="vertical" current={-1} items={itemArray} />
      </motion.div>
    </div>
  );
}

export default WorkStepper;
