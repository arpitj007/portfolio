import banner from "../assets/images/porter-banner.png";
import tcbanner from "../assets/images/tc-banner.png";
import quloibanner from "../assets/images/quloi-banner.png";
import snacksbanner from "../assets/images/snacks-banner.png";
import juicebanner from "../assets/images/juice-banner.png";
import prepleafbanner from "../assets/images/prepleaf-banner.png";

import logo from "../assets/images/porter-logo-blackbg.png";
import tclogo from "../assets/images/trustcloud.jpg";
import quloilogo from "../assets/images/quloi-logo.jpeg";
import pepsicologo from "../assets/images/pepsico.jpeg";
import helioslogo from "../assets/images/helios.png";
import prepleaflogo from "../assets/images/prepleaf.png";

export const projects = [
  {
    title: "Portfolio Builder",
    oneLiner: "A platform to build your portfolio",
    banner,
    logo,
    tags: ["React", "Redux", "NodeJS", "Express", "PostgreSQL", "AWS"],
    stats: {
      MRR: "$200",
      Users: "11",
      Launch: "Jul 2023",
    },
    client: {
      name: "Self",
      company: "Self",
    },
    miniDescription:
      "A quick and easy way to build your portfolio, with pre-designed templates. Just point your domain to our servers and you're good to go!",
  },
  {
    title: "TrustCloud",
    oneLiner: "A compliance management platform",
    banner: tcbanner,
    logo: tclogo,
    tags: ["React", "Redux", "NodeJS", "Express", "PostgresSQL", "AWS"],
    stats: {
      MRR: "> $1m",
      Users: "> 200",
      Launch: "Jan 2018",
    },
    client: {
      name: "TrustCloud",
      company: "TrustCloud Inc.",
    },
    miniDescription:
      "A compliance management platform, with a focus on the international market. Developed for TrustCloud Inc.",
    url: "https://app.trustcloud.ai",
  },
  {
    title: "Omni",
    oneLiner: "A one-stop solution for Shipping and Logistics",
    banner: quloibanner,
    logo: quloilogo,
    tags: ["React", "Redux", "NodeJS", "Express", "MongoDB", "AWS"],
    stats: {
      MRR: "> $100k",
      Users: "> 1000",
      Launch: "Sep 2022",
    },
    client: {
      name: "Quloi",
      company: "Quloi Pvt. Ltd.",
    },
    miniDescription:
      "A one-stop solution for Shipping and Logistics, with a focus on the international market. Developed for Quloi Pvt. Ltd.",
    url: "https://app.quloi.com",
  },
  {
    title: "Juice2you",
    oneLiner: "A Pepsico Venture",
    banner: juicebanner,
    logo: pepsicologo,
    tags: ["React", "Redux", "NodeJS", "Express", "SQL", "Azure"],
    stats: {
      MRR: "> $10m",
      Users: "No idea",
      Launch: "May 2021",
    },
    client: {
      name: "Pepsico",
      company: "Indianic Pvt. Ltd.",
    },
    miniDescription:
      "Pepsico offers a wide range of products, including juices, chips, and other snacks. Juice2you is a Pepsico venture, developed by a team of 14+ developers.",
    url: "https://tropicana-juice2you.com",
  },
  {
    title: "Snacks.com",
    oneLiner: "Another Pepsico Venture",
    banner: snacksbanner,
    logo: pepsicologo,
    tags: ["React", "Redux", "NodeJS", "Express", "SQL", "Azure"],
    stats: {
      MRR: "No idea",
      Users: "No idea",
      Launch: "Apr 2021",
    },
    client: {
      name: "Pepsico",
      company: "Indianic Pvt. Ltd.",
    },
    miniDescription:
      "A project similar to Juice2you, but with a focus on snacks for retail customers. Developed for Pepsico.",
    url: "https://snacks.com",
  },
  {
    title: "Helios",
    oneLiner: "Something related to Energy 🤷🏼‍♂️",
    banner,
    logo: helioslogo,
    tags: ["React", "Redux", "NodeJS", "Express", "MongoDB"],
    stats: {
      MRR: "No idea",
      Users: "No idea",
      Launch: "Oct 2020",
    },
    client: {
      name: "Helios",
      company: "Helios Corp.",
    },
    miniDescription:
      "Helios is a company that does something related to energy. I don't know what they do, but I know that they have a website and I built it.",
    url: "https://helioscorp.ca",
  },
  {
    title: "PrepLeaf",
    oneLiner: "An online learning platform",
    banner: prepleafbanner,
    logo: prepleaflogo,
    tags: ["React", "Redux"],
    stats: {
      "By Masai 💸": "Aquired ",
      Users: "No idea",
      Launch: "Jan 2020",
    },
    client: {
      name: "PrepLeaf",
      company: "PrepLeaf",
    },
    miniDescription:
      "PrepLeaf is an online learning platform that was aquired by Masai School. I was a part of the team that built the platform.",
    url: "https://prepleaf.com",
  },
];
