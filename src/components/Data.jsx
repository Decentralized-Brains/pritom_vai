import { BsFacebook, BsInstagram, BsMedium, BsTwitter } from "react-icons/bs";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";

export const social = [
  {
    id: 1,
    icon: <FaTelegramPlane />,
    url: "https://t.me/DoRacOfficialchat",
  },
  {
    id: 2,
    icon: <BsTwitter />,
    url: "https://twitter.com/DoRac_Official",
  },
  {
    id: 3,
    icon: <BsFacebook />,
    url: "https://www.facebook.com/DogeRaceOfficial",
  },
  {
    id: 4,
    icon: <BsInstagram />,
    url: "https://www.instagram.com/dorac_official/",
  },
  {
    id: 5,
    icon: <BsMedium />,
    url: "https://medium.com/@DoRacOfficial",
  },
  {
    id: 6,
    icon: <FaDiscord />,
    url: "https://discord.gg/vswdzWUVm8",
  },
];

import js from "../assets/img/js.png";
import react from "../assets/img/react.png";
import redux from "../assets/img/redux.png";
import ds from "../assets/img/ds.png";
import wing from "../assets/img/wing.png";
import python from "../assets/img/python.png";
import node from "../assets/img/node.png";
import angular from "../assets/img/angular.png";

export const skillsData = [
  {
    id: 1,
    img: js,
    tech: "Javascript",
  },
  {
    id: 2,
    img: react,
    tech: "React js",
  },
  {
    id: 3,
    img: redux,
    tech: "Redux",
  },
  {
    id: 4,
    img: ds,
    tech: "Data Science",
  },
  {
    id: 5,
    img: wing,
    tech: "Blockchain",
  },
  {
    id: 6,
    img: python,
    tech: "Python",
  },
  {
    id: 7,
    img: node,
    tech: "Node js",
  },
  {
    id: 8,
    img: angular,
    tech: "Angular js",
  },
];

import p1 from "../assets/projects/1.mp4";
import p2 from "../assets/projects/2.mp4";
import p3 from "../assets/projects/3.mp4";
import p4 from "../assets/projects/4.mp4";
import p5 from "../assets/projects/5.mp4";

export const ProjectData = [
  {
    id: 1,
    title: "Dorac App",
    description:
      "Dorac NFT Marketplace NFT Marketplace where you can Buy, Sell and Collect exotic NFT collection.",
    url: "https://www.dorac.app/",
    thumbnail: p1,
  },
  {
    id: 2,
    title: "Dorac Art",
    description:
      "Dorac NFT Marketplace NFT Marketplace where you can Buy, Sell and Collect exotic NFT collection.",
    url: "https://www.dorac.art/",
    thumbnail: p5,
  },
  {
    id: 3,
    title: "Discount Cloud Mining",
    description:
      "Discount Cloud Mining Discount brought new era of cloud mining where you can purchase Block and start mining.",
    url: "https://rakib-landing-swap.netlify.app/",
    thumbnail: p4,
  },
  {
    id: 4,
    title: "Punk Rats Club",
    description:
      "Punk Rats Club. A bot for minting. You can produce one or many NFTs depending on your needs.",
    url: "https://rakib-guttercat.netlify.app/",
    thumbnail: p3,
  },
  {
    id: 5,
    title: "A create and sale token site",
    description: "A create and sale token site",
    url: "https://rakib-token.netlify.app/",
    thumbnail: p2,
  },
];
