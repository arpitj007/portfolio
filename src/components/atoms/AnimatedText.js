import React from "react";

function AnimatedText({ text = "404" }) {
  return (
    <div className="animated-content">
      <svg viewBox="0 0 960 300">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="50%">
            {text}
          </text>
        </symbol>

        <g className="g-ants">
          <use xlinkHref="#s-text" className="animated-text"></use>
          <use xlinkHref="#s-text" className="animated-text"></use>
          <use xlinkHref="#s-text" className="animated-text"></use>
          <use xlinkHref="#s-text" className="animated-text"></use>
          <use xlinkHref="#s-text" className="animated-text"></use>
        </g>
      </svg>
    </div>
  );
}

export default AnimatedText;
