import React, { useState } from "react";
import { motion } from "framer-motion";
import { PieChart } from "react-minimal-pie-chart";

import { aboutMe } from "../../../constants/about-me";
import trustcloudLogo from "../../../assets/images/trustcloud.jpg";
import Chip from "../../protons/Chip";
import MediumHeading from "../../atoms/MediumHeading";
import { monthDiff } from "../../../utils/utils";

const totalTechExperience = [
  {
    name: "JavaScript",
    value: monthDiff(new Date(), new Date("2019-04-01")),
    expertise: "Expert",
  },
  {
    name: "HTML",
    value: monthDiff(new Date(), new Date("2019-04-01")),
    expertise: "Expert",
  },
  {
    name: "Scss",
    value: monthDiff(new Date(), new Date("2019-12-01")),
    expertise: "Expert",
  },
  {
    name: "ReactJS",
    value: monthDiff(new Date(), new Date("2019-07-01")),
    expertise: "Expert",
  },
  {
    name: "CSS",
    value: monthDiff(new Date(), new Date("2019-04-01")),
    expertise: "Expert",
  },
  {
    name: "NodeJS",
    value: monthDiff(new Date(), new Date("2019-11-01")),
    expertise: "Expert",
  },

  {
    name: "ExpressJS",
    value: monthDiff(new Date(), new Date("2019-11-01")),
    expertise: "Expert",
  },
  {
    name: "HapiJS",
    value: monthDiff(new Date(), new Date("2022-07-01")),
    expertise: "Expert",
  },
  {
    name: "Postgres",
    value: monthDiff(new Date(), new Date("2022-07-01")),
    expertise: "Advanced",
  },
  {
    name: "AWS - SQS",
    value: monthDiff(new Date(), new Date("2021-08-01")),
    expertise: "Expert",
  },
  {
    name: "AWS - SES",
    value: monthDiff(new Date(), new Date("2021-08-01")),
    expertise: "Expert",
  },
  {
    name: "AWS - SNS",
    value: monthDiff(new Date(), new Date("2021-08-01")),
    expertise: "Expert",
  },
  {
    name: "AWS - S3",
    value: monthDiff(new Date(), new Date("2021-08-01")),
    expertise: "Expert",
  },
  {
    name: "AWS - Lambda",
    value: monthDiff(new Date(), new Date("2021-08-01")),
    expertise: "Expert",
  },
  {
    name: "AWS - DynamoDB",
    value: monthDiff(new Date(), new Date("2021-08-01")),
    expertise: "Advanced",
  },
  {
    name: "AWS - EC2",
    value: monthDiff(new Date(), new Date("2021-08-01")),
    expertise: "Intermediate",
  },
  {
    name: "AWS - CloudWatch",
    value: monthDiff(new Date(), new Date("2021-08-01")),
    expertise: "Advanced",
  },
  {
    name: "AWS - Cognito",
    value: monthDiff(new Date(), new Date("2021-08-01")),
    expertise: "Expert",
  },
  {
    name: "AWS - Route53",
    value: monthDiff(new Date(), new Date("2023-01-01")),
    expertise: "Intermediate",
  },
  {
    name: "MongoDB",
    value: monthDiff(new Date(), new Date("2021-08-01")),
    expertise: "Advanced",
  },
  {
    name: "NextJS",
    value: monthDiff(new Date("2021-04-01"), new Date("2021-08-01")),
    expertise: "Beginner",
  },
  {
    name: "Python",
    value: monthDiff(new Date(), new Date("2023-04-01")),
    expertise: "Beginner",
  },
  {
    name: "Flask",
    value: monthDiff(new Date(), new Date("2023-04-01")),
    expertise: "Beginner",
  },
  {
    name: "Docker",
    value: monthDiff(new Date(), new Date("2023-05-01")),
    expertise: "Beginner",
  },
  {
    name: "Machine Learning",
    value: monthDiff(new Date(), new Date("2023-06-01")),
    expertise: "Beginner",
  },
  {
    name: "Data Science",
    value: monthDiff(new Date(), new Date("2023-06-01")),
    expertise: "Beginner",
  },
];

const MainSection = () => {
  return (
    <motion.div
      className="about-main__container"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.img
        src={trustcloudLogo}
        alt="Arpit Jangir"
        className="avatar about-main__image"
      />
      <motion.div className="about-main__container--description">
        <motion.h3 className="about-main__container--description--title">
          Arpit Jangir
        </motion.h3>
        <motion.p className="about-main__container--description--text">
          July 28, 1998
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const TechStack = () => {
  const [currentTech, setCurrentTech] = useState(totalTechExperience[0]);
  return (
    <motion.div className="about-tech-stack__container">
      <motion.h3 className="about-tech-stack__container--title">
        <MediumHeading text="Tech Stack" />
      </motion.h3>
      <motion.div
        className="about-tech-stack__container--title--pie"
        initial={{ opacity: 0, top: 100 }}
        animate={{ opacity: 1, top: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PieChart
          data={[{ value: 1, key: 1, color: "#43d9ad" }]}
          reveal={(currentTech.value / monthDiff()) * 100}
          lineWidth={10}
          background="#1f1f1f"
          className="pie"
          lengthAngle={270}
          rounded
          animate
          style={{ height: "6rem" }}
        />
        <motion.div className="about-tech-stack__container--title--pie--text">
          <p>
            Total : <span>{monthDiff()} (months)</span>
          </p>
          <p>
            {currentTech.name} : <span>{currentTech.value}</span>
          </p>
          <p>
            Expertise : <span>{currentTech.expertise}</span>
          </p>
        </motion.div>
      </motion.div>
      <motion.div className="about-tech-stack__container--stack">
        <motion.div
          className="about-tech-stack__container--stack--chips"
          initial={{ opacity: 0, top: 100 }}
          animate={{ opacity: 1, top: 0 }}
          transition={{ duration: 0.5 }}
        >
          {totalTechExperience.map((tech) => (
            <Chip tag={tech.name} onClick={() => setCurrentTech(tech)} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

function AboutMobile() {
  const bio = aboutMe[0];
  return (
    <motion.div className="mobile-about__container">
      <MainSection sectionData={bio} />
      <TechStack />
    </motion.div>
  );
}

export default AboutMobile;
