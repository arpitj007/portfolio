import React, { useEffect, useState } from "react";
import { message } from "antd";

import bolt from "../../../assets/icons/bolt-up-left.svg";
import SnakeGame from "./Snake/SnakeGame";

function Games() {
  const [score, setScore] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();
  const key = "scoreAlert";
  const handleScoreAlert = (gameScore) => {
    setScore(gameScore);
  };

  useEffect(() => {
    if (score > 0) {
      messageApi.open({
        key,
        content:
          "Your score is " +
          score +
          "! 🎉 You have 10 seconds to take a screenshot!",
        duration: 10,
      });
    }
  }, [score]);
  return (
    <div className="game-container">
      {contextHolder}
      <img src={bolt} alt={"bolt"} className="bolt-top-left" />
      <img src={bolt} alt={"bolt"} className="bolt-bottom-left" />
      <img src={bolt} alt={"bolt"} className="bolt-top-right" />
      <img src={bolt} alt={"bolt"} className="bolt-bottom-right" />
      <SnakeGame setScoreAlert={handleScoreAlert} />
    </div>
  );
}

export default Games;
