import React, { useState } from "react";
import { message } from "antd";

import CommentLine from "../atoms/CommentLine";
import LargeHeading from "../atoms/LargeHeading";
import MediumHeading from "../atoms/MediumHeading";
import SmallHeading from "../atoms/SmallHeading";
import VariableLine from "../atoms/VariableLine";
import Games from "./games/Games";
import useResponsive from "../../hooks/useResponsive";
import ProjectDescriptionContainer from "../atoms/ProjectDescriptionContainer";
import MoveToNextPage from "../atoms/MoveToNextPage";
import { URL_CONSTANTS } from "../../constants/url";
import HelmetConfig from "../../common/HelmetConfig";
import CustomModal from "../protons/CustomModal";
import InputPrimary from "../protons/InputPrimary";
import services from "../../services";
import { CustomAlert } from "../protons/CustomAlert";

function Home() {
  const [subscribeData, setSubscribeData] = useState({ email: "" });
  const { isTabletOrMobile } = useResponsive();
  const [messageApi, contextHolder] = message.useMessage();
  const key = "subscribe";
  const dontBother = /^true$/i.test(localStorage.getItem("dontBother"));

  const handleDontBother = () => {
    localStorage.setItem("dontBother", true);
  };

  const handleSubscribe = async () => {
    messageApi.open({
      key,
      content: "Subscribing...",
    });
    await services.commonService.subscribe(subscribeData);
    localStorage.setItem("dontBother", true);
    messageApi.open({
      key,
      content: "✅ Done! Thank you for subscribing",
      duration: 2,
    });
  };

  const updateDontBotherMobileSite = () => {
    localStorage.setItem("dontBotherMobileSite", true);
  };

  const shouldHideMobileSiteAlert =
    localStorage.getItem("dontBotherMobileSite") !== "true";
  return (
    <div className="home-container">
      {contextHolder}
      <HelmetConfig title="Home" />
      <CustomModal
        title="Just a heads up!"
        mountOnEnter={!dontBother}
        cancelText="Don't bother me"
        okText="Subscribe"
        closable={false}
        onSecondaryClick={handleDontBother}
        onPrimaryClick={handleSubscribe}
      >
        <ul className="companu-work-list">
          <li className="text-white">
            Hi, this website is still under development
          </li>
          <li className="text-white">
            If you want to recieve updates, please subscribe to my newsletter.
          </li>
          <li className="text-white">
            If not, simply close the modal and continue exploring the website.
            I'll not bother you again.
          </li>
        </ul>
        <InputPrimary
          placeholder="Enter your email"
          name="email"
          label="Subscribe to newsletter"
          type="email"
          onChange={(e) => setSubscribeData({ email: e.target.value })}
        />
      </CustomModal>
      <div className="info-section">
        {shouldHideMobileSiteAlert && !isTabletOrMobile && (
          <CustomAlert
            message="The mobile website is even cooler!🥶, check that out on your mobile📱"
            isClosable
            onClose={() => updateDontBotherMobileSite(true)}
          />
        )}
        <SmallHeading text="Hi there 👋🏽, I'm" color="#fff" />
        <LargeHeading text="Arpit Jangir" color="#fff" />
        <MediumHeading text="> Full-stack web developer 🧑🏽‍💻" color="#43D9AD" />
        {!isTabletOrMobile && (
          <>
            <CommentLine
              text="Complete the game to continue 👾"
              color="#607B96"
            />
            <CommentLine
              text="You can find it on my github page 🚀"
              color="#607B96"
            />
            <CommentLine
              text="I will keep adding new games just for fun! 🥳"
              color="#607B96"
            />
            <VariableLine
              data={
                <>
                  <span style={{ color: "#4D5BCE" }}>{"const "}</span>
                  <span style={{ color: "#43D9AD" }}>{"myGhLink = "}</span>
                  <a
                    href={"https://github.com/arpitj007"}
                    rel="noreferrer"
                    target="_blank"
                    className="link-class"
                  >
                    <span style={{ color: "#E99287" }}>
                      {"“https://github.com/arpitj007”"}
                    </span>
                  </a>
                </>
              }
            />
          </>
        )}
      </div>
      {!isTabletOrMobile && (
        <div className="game-section">
          <Games />
        </div>
      )}
      {isTabletOrMobile && (
        <div className="mobile-github-link">
          <CommentLine text="Find my profile on Github" color="#607B96" />
          <VariableLine
            data={
              <>
                <span style={{ color: "#4D5BCE" }}>{"const "}</span>
                <span style={{ color: "#43D9AD" }}>{"ghLink = "}</span>
                <a
                  href={"https://github.com/arpitj007"}
                  rel="noreferrer"
                  target="_blank"
                  className="link-class"
                >
                  <span style={{ color: "#E99287" }}>
                    {"“https://github.com/arpitj007”"}
                  </span>
                </a>
              </>
            }
          />
          <ProjectDescriptionContainer />
          <MoveToNextPage page={URL_CONSTANTS.BIO} />
        </div>
      )}
    </div>
  );
}

export default Home;
