import React from "react";
import { useSelector } from "react-redux";

import SidebarToggleMenu from "../../atoms/SidebarToggleMenu";
import withMiddleDetailsSection from "../../../hooks/withMiddleDetailsSection";
import withRightDetailsSection from "../../../hooks/withRightDetailsSection";
import MiddleSection from "../../atoms/MiddleSection";
import DetailCard from "../../atoms/DetailCard";
import {
  dataPersonal,
  quloiMobile,
  trustcloudMobile,
} from "../../../constants/about-me";
import HelmetConfig from "../../../common/HelmetConfig";
import useResponsive from "../../../hooks/useResponsive";
import MobileMenu from "../../../common/MobileMenu";
import AboutMobile from "./AboutMobile";
import { URL_CONSTANTS } from "../../../constants/url";
import WorkStepper from "../../protons/WorkStepper";

const RightDetailsSection = withRightDetailsSection(() => {
  return <DetailCard />;
});

const MiddleDetailsSection = withMiddleDetailsSection((props) => {
  return <MiddleSection {...props} />;
});

const renderMobileAboutItem = (item) => {
  let aboutItem = null;
  switch (item.tab) {
    case URL_CONSTANTS.BIO:
      aboutItem = <AboutMobile />;
      break;
    case URL_CONSTANTS.WORK.TRUSTCLOUD:
      aboutItem = (
        <WorkStepper itemArray={trustcloudMobile} title="Trustcloud.ai" />
      );
      break;
    case URL_CONSTANTS.WORK.QULOI:
      aboutItem = <WorkStepper itemArray={quloiMobile} title="Quloi" />;
      break;
    case URL_CONSTANTS.WORK.INDIANIC:
      aboutItem = <WorkStepper itemArray={trustcloudMobile} title="Indianic" />;
      break;
    case URL_CONSTANTS.WORK.FREELANCE:
      aboutItem = <WorkStepper itemArray={quloiMobile} title="Freelancer" />;
      break;
    case URL_CONSTANTS.EDUCATION.SELF_TAUGHT:
      aboutItem = <AboutMobile />;
      break;
    case URL_CONSTANTS.EDUCATION.COLLEGE:
      aboutItem = <AboutMobile />;
      break;
    case URL_CONSTANTS.EDUCATION.SCHOOL:
      aboutItem = <AboutMobile />;
      break;
    case URL_CONSTANTS.SKILLS.PROGRAMMING:
      aboutItem = <AboutMobile />;
      break;
    case URL_CONSTANTS.SKILLS.DESIGN:
      aboutItem = <AboutMobile />;
      break;
    case URL_CONSTANTS.SKILLS.MUSIC:
      aboutItem = <AboutMobile />;
      break;
    case URL_CONSTANTS.SKILLS.SPORTS:
      aboutItem = <AboutMobile />;
      break;
    case URL_CONSTANTS.SKILLS.GAMES:
      aboutItem = <AboutMobile />;
      break;
    case URL_CONSTANTS.SKILLS.OTHER:
      aboutItem = <AboutMobile />;
      break;
    default:
      aboutItem = <AboutMobile />;
      break;
  }
  return aboutItem;
};

function About() {
  const { isTabletOrMobile } = useResponsive();
  const { mobileActiveTab } = useSelector((state) => state.mobileActiveTab);

  return (
    <div className="about-container">
      <HelmetConfig title="About" />
      {isTabletOrMobile && <MobileMenu data={dataPersonal} />}
      {!isTabletOrMobile && <SidebarToggleMenu data={dataPersonal} />}
      {!isTabletOrMobile && <MiddleDetailsSection />}
      {!isTabletOrMobile && <RightDetailsSection />}
      {isTabletOrMobile && renderMobileAboutItem(mobileActiveTab)}
    </div>
  );
}

export default About;
