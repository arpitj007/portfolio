import * as React from "react";
import { motion, Reorder } from "framer-motion";

export const Tab = ({ item, onClick, onRemove, isSelected }) => {
  return (
    <Reorder.Item
      value={item}
      id={item.label}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        border: isSelected ? "0.5px solid #e3e3e3" : "0.5px solid #333436",
        y: 0,
        transition: { duration: 0.5 },
      }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
      whileDrag={{
        border: "1px solid #e5e5e5",
      }}
      className="tab"
      onPointerDown={onClick}
    >
      <motion.span layout="position">{`${item.emoji} ${item.tab}`}</motion.span>
      <motion.div layout className="close">
        <motion.button
          onPointerDown={(event) => {
            onRemove();
          }}
          initial={false}
          animate={{ backgroundColor: isSelected ? "#e3e3e3" : "#fff" }}
        >
          <i className="ri-close-line" />
        </motion.button>
      </motion.div>
    </Reorder.Item>
  );
};
