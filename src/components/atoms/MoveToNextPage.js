import React from "react";
import { useNavigate } from "react-router-dom";

import { MOVE_TO_NEXT_PAGE } from "../../constants/url";
import ButtonPrimary from "../protons/ButtonPrimary";

function MoveToNextPage({ page }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(MOVE_TO_NEXT_PAGE[page].url);
  };
  return (
    <div className="move-to-next-page__container">
      <div className="move-to-next-page__text">
        {MOVE_TO_NEXT_PAGE[page].text}
      </div>
      <ButtonPrimary
        onClick={handleClick}
        buttonText={MOVE_TO_NEXT_PAGE[page].buttonText}
      />
    </div>
  );
}

export default MoveToNextPage;
