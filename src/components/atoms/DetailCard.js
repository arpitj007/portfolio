import React from "react";
import { useSelector } from "react-redux";

import SmallHeading from "./SmallHeading";
import CommentLine from "./CommentLine";
import { CONTENT_TYPES } from "../../constants/about-me";
import AnimatedText from "./AnimatedText";
import AnimateLogo from "./AnimateLogo";

const skipItemsFromMapping = ["logo"];

function DetailCard() {
  const { currentTabData } = useSelector((state) => state.currentTabData);
  const { currentTab } = useSelector((state) => state.currentTab);

  const returnContentOnType = ({ key, mappingContent }, type) => {
    switch (type) {
      case CONTENT_TYPES.URL:
        return (
          <div>
            {key}:
            <a
              href={mappingContent[key]}
              target="_blank"
              rel="noopener noreferrer"
              className="link-class"
            >
              <span style={{ color: "#E99287" }}> {mappingContent[key]}</span>
            </a>
          </div>
        );

      default:
        return (
          <div>
            {key}:
            <span className="detail-card__content-text">
              {" "}
              {mappingContent[key]}
            </span>
          </div>
        );
    }
  };

  if (currentTab.shouldHideCodingContent) return <AnimateLogo />;
  return (
    <>
      {currentTab.title ? (
        <div className="detail-card">
          <div className="detail-card__heading">
            <SmallHeading text={currentTab.title} color="white" />
            <CommentLine text={currentTab.tab} color="#607B96" />
          </div>
          <div className="detail-card__content">
            <img
              src="https://avatars.githubusercontent.com/u/59872801?v=4"
              alt="Arpit Jangir"
            />
            <div className="detail-card__content-section">
              {Object.keys(currentTabData).length > 0 &&
                currentTabData.map((item) => {
                  const mappingContent = item[Object.keys(item)[0]];
                  return (
                    <div className="detail-card__content-data">
                      {Object.keys(mappingContent).map((key) => {
                        if (skipItemsFromMapping.includes(key)) return null;
                        return returnContentOnType(
                          { key, mappingContent },
                          key
                        );
                      })}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <AnimatedText />
      )}
    </>
  );
}

export default DetailCard;
