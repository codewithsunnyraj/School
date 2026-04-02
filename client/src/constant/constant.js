import logo from "../assets/logo.png";
import slider_1 from "../assets/banner/banner_1.jpg";
import slider_2 from "../assets/banner/banner_2.jpg";
import kids_bg from "../assets/Home/service_bg.png";
import why_1 from "../assets/Home/why_choose_us.jpg";
import why_2 from "../assets/Home/why_choose_us_2.jpg";
import why_3 from "../assets/Home/why_choose_us_3.jpg";
import why_4 from "../assets/Home/why_choose_us_4.jpg";
import g1 from "../assets/Home/g1.jpg";
import g2 from "../assets/Home/g2.jpg";
import g3 from "../assets/Home/g2.jpg";
import g4 from "../assets/Home/g4.jpg";
import blog_1 from "../assets/Home/blog-1.jpg";
import blog_2 from "../assets/Home/blog-3.jpg";
import blog_3 from "../assets/Home/blog-2.jpg";
import fac_1 from "../assets/Home/facility_1.jpg";
import fac_2 from "../assets/Home/facility_2.jpg";
import fac_3 from "../assets/Home/facility_3.jpg";
import fac_4 from "../assets/Home/facility_4.jpg";
import feed from "../assets/Home/feedback.jpg";
import bg_bread1 from "../assets/breadcrumb_bg.jpg";
import { FaBusSimple } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { IoSchoolSharp, IoFastFood } from "react-icons/io5";
import { FaStar, FaStarHalf } from "react-icons/fa";

export const assets = {
  logo,
  feed,
  kids_bg,
  bg_bread1,
  g1,
  g2,
  g3,
  g4,
};

export const slider = [
  {
    id: 1,
    src: slider_1,
    title: "12",
    desc: "fghfhh",
  },
  {
    id: 2,
    src: slider_2,
    title: "12",
    desc: "fghfhh2",
  },
];

export const why_choose_us = [
  {
    id: 1,
    img: why_1,
    title: "Online Class",
  },
  {
    id: 2,
    img: why_2,
    title: "Painting",
  },
  {
    id: 3,
    img: why_3,
    title: "Formal Tuition",
  },
  {
    id: 4,
    img: why_4,
    title: "Learn & Play",
  },
];

export const grade_level = [
  {
    id: 1,
    title: "Grade 1",
    description: "Age 03- 04",
  },
  {
    id: 2,
    title: "Grade 2",
    description: "Age 04- 06",
  },
  {
    id: 3,
    title: "Grade 3",
    description: "Age 06- 08",
  },
  {
    id: 4,
    title: "Grade 4",
    description: "Age 08- 10",
  },
];

export const blog_data = [
  {
    id: 1,
    title: "Learn And Play",
    img: blog_1,
    date: "26 Sep 2025",
    desc: "Pre-school has open door andosol offer free trial session in child. ",
  },
  {
    id: 2,
    title: "Indoor Class Rooms And Play",
    date: "26 Mar 2025",
    img: blog_2,
    desc: "Pre-school has open door andosol offer free trial session in child. ",
  },
  {
    id: 3,
    title: "Filled Fun & Games And Play",
    date: "30 July 2025",
    img: blog_3,
    desc: "Pre-school has open door andosol offer free trial session in child. ",
  },
];

export const facilities_data = [
  {
    id: 1,
    title: "Pick & Drop",
    img: fac_1,
    icon: IoFastFood,
    desc: " Pre-school has open door is and also offer free trial session in child.",
  },
  {
    id: 2,
    title: "Modern School",
    img: fac_2,
    icon: FaBusSimple,
    desc: "Pre-school has open door andosol offer free trial session in child. ",
  },
  {
    id: 3,
    title: "Online Class",
    img: fac_3,
    icon: SiGoogleclassroom,
    desc: "Pre-school has open door andosol offer free trial session in child. ",
  },
  {
    id: 4,
    title: "Playground",
    icon: IoSchoolSharp,
    img: fac_4,
    desc: "Pre-school has open door andosol offer free trial session in child. ",
  },
];

export const feedbacks = [
  {
    id: 1,
    img: g3,
    feedback:
      "“ We look forward to developing tha long-term relationship with children and parents and will welcome children into our ennce after-school Our afterschool service “ ",
    name: "Sunny Raj",
    rating: [FaStar, FaStar, FaStar, FaStar, FaStarHalf],
  },
  {
    id: 2,
    img: g3,
    feedback:
      "“ We look forward to developing tha long-term relationship with children and parents and will welcome children into our ennce after-school Our afterschool service “ ",
    name: "Sunny Raj",
    rating: [FaStar, FaStar, FaStar, FaStar, FaStarHalf],
  },
  {
    id: 3,
    img: g3,
    feedback:
      "“ We look forward to developing tha long-term relationship with children and parents and will welcome children into our ennce after-school Our afterschool service “ ",
    name: "Sunny Raj",
    rating: [FaStar, FaStar, FaStar, FaStar],
  },
];
