import portfolioBuilder from "../assets/images/portfolio-builder.jpeg";
import ButtonPrimary from "../components/protons/ButtonPrimary";
import Chip from "../components/protons/Chip";

export const CONTENT_TYPES = {
  URL: "url",
  LOGO: "logo",
  IMAGE: "image",
};

export const FEATURED_PROJECTS = [
  {
    title: "Portfolio Builder",
    buttonText: "view-project",
    description:
      "A web application that allows users to create their own portfolio website by choosing from a variety of templates.",
    techStack: "React, Node.js, Express, MongoDB",
    image: portfolioBuilder,
    linkTo: "/projects/portfolio-builder",
  },
];

export const aboutMe = [
  {
    basicDetails: {
      name: "Arpit Jangir",
      DOB: "July 28",
    },
  },
  {
    workDetails: {
      WorkSummary:
        "I am a Full Stack Developer with 5+ years of experience in building web applications.",
      passionateAbout: "Working on new technologies and building new things.",
      currentlyWorkingAt: "Trustcloud.AI",
      currentlyWorkingAs: "Software Engineer",
    },
  },
  {
    techStack: {
      currentTechStack: "JavaScript, React, Node.js, Express, Hapi, Postgres",
      otherTechStack: "AWS, SQS, SES, SNS, S3, Lambda, DynamoDB, EC2",
      currentlyLearning:
        "Python, Flask, Docker, Machine Learning, Qemu, Data Science",
    },
  },
  {
    responsibilities: {
      otherResponsibilities: "Mentoring, Code Reviews, Team Management",
    },
  },
  {
    other: {
      hobbies: "Reading, Gaming, Watching Movies, Listening to Music",
    },
  },
];

export const trustCloud = [
  {
    companyDetails: {
      name: "Trustcloud",
      url: "https://trustcloud.ai",
      logo: "https://dataconnectors.com/wp/wp-content/uploads/2022/09/trust-cloud-logo1-1024x254.png",
    },
  },
  {
    otherDetails: {
      description:
        "Trustcloud is a startup that is building a platform to help companies to manage their data and to help them to be compliant with the GDPR.",
      location: "Remote",
      technologies: "React, Redux, Node, Express, MongoDB, AWS, Docker",
    },
  },
  {
    workingStatus: { startDate: "Sept 2022", endDate: "Present" },
  },
];

export const trustcloudMobile = [
  {
    title: "Senior Software Engineer",
    description: "Sept 2022 - Present",
  },
  {
    title: "Work Summary",
    description:
      "Working as a Senior Software Engineer, I am responsible for building new features, fixing bugs, mentoring junior developers, and code reviews.",
  },
  {
    title: "Responsibilities",
    description: "Mentoring, Code Reviews, Team Management",
  },
  {
    title: "Technologies",
    description: (
      <div className="company-chips">
        {[
          "ReactJs",
          "ReactQuery",
          "AWS",
          "NodeJs",
          "HapiJs",
          "PostgresSQL",
          "Docker",
        ].map((item) => (
          <Chip key={item} tag={item} />
        ))}
      </div>
    ),
  },
  {
    title: "My work",
    description: (
      <div className="company-work-details">
        <div className="company-work-details__item">
          <h3>Trustcloud.ai</h3>
          <ul className="companu-work-list">
            <li>
              Building a platform to help companies to manage their data and to
              help them to be compliant with the GDPR.
            </li>
            <li>
              Worked on authentication, authorization, and user management
              modules.
            </li>
            <li>
              Worked on migrations, database design, and building APIs for
              different modules.
            </li>
            <li>
              Worked on building a custom CMS for the platform to manage
              different modules.
            </li>
            <li>
              Worked on building multiple Rest APIs for different modules.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Visit Trustcloud.ai",
    description: (
      <ButtonPrimary
        buttonText="Visit Website"
        onClick={() => window.open("https://trustcloud.ai", "_blank")}
      />
    ),
  },
];

export const quloi = [
  {
    companyDetails: {
      name: "Quloi",
      url: "https://quloi.com",
      logo: "https://quloi.com/images/logo.png",
    },
  },
  {
    otherDetails: {
      description:
        "Quloi is a startup that is building a platform to help companies to manage their data and to help them to be compliant with the GDPR.",
      location: "Remote",
      technologies: "React, Redux, Node, Express, MongoDB, AWS",
    },
  },
  {
    workingStatus: { startDate: "Sept 2021", endDate: "Sept 2022" },
  },
];

export const quloiMobile = [
  {
    title: "Senior Software Engineer",
    description: "Sept 2021 - Sept 2022",
  },
  {
    title: "Work Summary",
    description:
      "Working as a Senior Software Engineer, I was responsible for building new features, fixing bugs, mentoring junior developers, and code reviews.",
  },
  {
    title: "Responsibilities",
    description: "Mentoring, Code Reviews, Team Management",
  },
  {
    title: "Technologies",
    description: (
      <div className="company-chips">
        {["ReactJs", "Redux", "AWS", "NodeJs", "ExpressJs", "MongoDB"].map(
          (item) => (
            <Chip key={item} tag={item} />
          )
        )}
      </div>
    ),
  },
  {
    title: "My work",
    description: (
      <div className="company-work-details">
        <div className="company-work-details__item">
          <h3>Quloi.com</h3>
          <ul className="companu-work-list">
            <li>
              Lead architect and developer for their main project Omni. Created
              the architecture and developed the whole project from scratch.
            </li>
            <li>
              Worked on authentication, authorization, user management, shipment
              management, and order management modules.
            </li>
            <li>
              Worked on migrations, database design, and building APIs for
              different modules.
            </li>
            <li>
              Worked on building a custom CMS for the platform to manage
              different modules.
            </li>
            <li>
              Worked on the FE architecture and lead the team of 7 developers.
            </li>
            <li>
              Worked on building multiple Rest APIs for different modules.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Visit Quloi.com",
    description: (
      <ButtonPrimary
        buttonText="Visit Website"
        onClick={() => window.open("https://quloi.com", "_blank")}
      />
    ),
  },
];

export const indianic = [
  {
    companyDetails: {
      name: "Indianic Infotech Ltd.",
      url: "https://indianic.com",
      logo: "https://indianic.com/wp-content/uploads/2019/03/Indianic-Logo.png",
    },
  },
  {
    otherDetails: {
      description:
        "Indianic is a software development company that provides software development services to its clients.",
      location: "Remote",
      technologies: "React, Redux",
    },
  },
  {
    workingStatus: { startDate: "Mar 2021", endDate: "Sept 2021" },
  },
];

export const indianicMobile = [
  {
    title: "Senior Software Engineer",
    description: "Mar 2021 - Sept 2021",
  },
  {
    title: "Work Summary",
    description:
      "Working as a Senior Software Engineer, I was responsible for building new features, fixing bugs, mentoring junior developers, and code reviews.",
  },
  {
    title: "Responsibilities",
    description: "Mentoring, Code Reviews, Client Communication",
  },
  {
    title: "Technologies",
    description: (
      <div className="company-chips">
        {["ReactJs", "Redux"].map((item) => (
          <Chip key={item} tag={item} />
        ))}
      </div>
    ),
  },
  {
    title: "My work",
    description: (
      <div className="company-work-details">
        <div className="company-work-details__item">
          <h3>Indianic.com</h3>
          <ul className="companu-work-list">
            <li>
              Worked on multiple client projects and built multiple modules for
              them.
            </li>
            <li>
              Worked on authentication, authorization, user management, and
              Frontend modules.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Visit Indianic.com",
    description: (
      <ButtonPrimary
        buttonText="Visit Website"
        onClick={() => window.open("https://indianic.com", "_blank")}
      />
    ),
  },
];

export const freelance = [
  {
    companyDetails: {
      name: "Freelance",
      url: "https://upwork.com",
      logo: "https://www.upwork.com/ab/brontes/favicon.ico",
    },
  },
  {
    otherDetails: {
      description:
        "I have worked as a freelancer for many clients and have built many web applications for them.",
      location: "Remote",
      technologies: "React, Redux, Node, Express, MongoDB, AWS, PHP, Firebase",
    },
  },
  {
    workingStatus: { startDate: "Aug 2018", endDate: "Mar 2021" },
  },
];

export const freelanceMobile = [
  {
    title: "Freelancer",
    description: "Aug 2018 - Mar 2021",
  },
  {
    title: "Work Summary",
    description:
      "Working as a freelancer, I was responsible for building new features, fixing bugs, and code reviews.",
  },
  {
    title: "Technologies",
    description: (
      <div className="company-chips">
        {[
          "ReactJs",
          "Redux",
          "NodeJs",
          "ExpressJs",
          "MongoDB",
          "AWS",
          "PHP",
          "Firebase",
        ].map((item) => (
          <Chip key={item} tag={item} />
        ))}
      </div>
    ),
  },
  {
    title: "My work",
    description: (
      <div className="company-work-details">
        <div className="company-work-details__item">
          <h3>Upwork.com</h3>
          <ul className="companu-work-list">
            <li>
              Worked on multiple client projects and built multiple modules for
              them.
            </li>
            <li>
              Worked on authentication, authorization, user management, and
              Frontend modules.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Visit Upwork.com",
    description: (
      <ButtonPrimary
        buttonText="Visit Website"
        onClick={() => window.open("https://upwork.com", "_blank")}
      />
    ),
  },
];

export const education = [
  {
    educationDetails: { name: "College" },
  },
  {
    degree: {
      description:
        "I graduated from MLV Textile and Engineering College, Bhilwara as a Textile Engineer in 2017 and later started working as a Software Engineer.",
    },
  },
  {
    sources: { sources: "Udemy, Coursera, Youtube, Medium, Blogs, etc." },
  },
];

export const music = [
  {
    name: {
      name: "Music",
    },
  },
  {
    description: {
      description:
        "I have learned many things by myself and have built many projects to learn new things.",
    },
  },
  {
    sources: {
      sources: "Udemy, Coursera, Youtube, Medium, Blogs, etc.",
    },
  },
];

export const dataPersonal = [
  {
    title: "bio",
    emoji: "🏴‍☠️",
    tab: "bio",
    isExpandable: false,
  },
  {
    title: "work",
    emoji: "👨‍💻",
    isExpandable: true,
    content: [
      {
        title: "Trustcloud",
        url: "_trustcloud",
        emoji: "🤖",
        tab: "trustcloud",
      },
      {
        title: "Quloi",
        url: "_quloi",
        emoji: "🚢",
        tab: "quloi",
      },
      {
        title: "Indianic",
        url: "_indianic",
        emoji: "🛠",
        tab: "indianic",
      },
      {
        title: "Freelance",
        url: "_freelance",
        emoji: "🏠",
        tab: "freelance",
      },
    ],
  },
  {
    title: "education",
    emoji: "🎓",
    isExpandable: false,
    tab: "education",
  },
  {
    title: "random",
    emoji: "🎲",
    isExpandable: true,
    content: [
      {
        title: "Playlist",
        url: "_playlist",
        emoji: "🎵",
        tab: "playlist",
        shouldHideCodingContent: true,
      },
      {
        title: "Movies",
        url: "_movies",
        emoji: "🎥",
        tab: "movies",
        shouldHideCodingContent: true,
      },
      {
        title: "Chess",
        url: "_chess",
        emoji: "♟️",
        tab: "chess",
        shouldHideCodingContent: true,
      },
      {
        title: "PS5",
        url: "_ps5",
        emoji: "🎮",
        tab: "ps5",
        shouldHideCodingContent: true,
      },
    ],
  },
];
