import React, { useEffect, useState } from "react";
import { Modal } from "antd";

function CustomModal({
  title,
  onPrimaryClick,
  onSecondaryClick,
  mountOnEnter = false,
  children,
  ...otherProps
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrimaryClick = () => {
    setIsModalOpen(false); // Close the modal
    if (onPrimaryClick) {
      onPrimaryClick(); // Execute the primary click callback if provided
    }
  };

  const handleSecondaryClick = () => {
    setIsModalOpen(false); // Close the modal
    if (onSecondaryClick) {
      onSecondaryClick(); // Execute the secondary click callback if provided
    }
  };

  useEffect(() => {
    if (mountOnEnter) {
      setIsModalOpen(true); // Open the modal
    }
  }, [mountOnEnter]);

  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handlePrimaryClick}
      onCancel={handleSecondaryClick}
      className="modal"
      okButtonProps={{ className: "button" }}
      cancelButtonProps={{ className: "button" }}
      {...otherProps}
    >
      {children}
    </Modal>
  );
}

export default CustomModal;
