import React from "react";
import HomeBannerTwo from "../component/Home_Two/Banner";
import HomeTwoAbout from "../component/Home_Two/About";
import ServiceHomeTwo from "../component/Home_Two/Service";
import HomeTwoCounter from "../component/Common/Counter";
import HomeTwoMap from "../component/Home_Two/Map";
import TeamArea from "../component/Home_Two/Team";
import HomeTwoClient from "../component/Home_Two/Client";
import Subscribe from "../component/Common/Subscribe";
import BlogHome from "../component/Common/Blog";

const index2 = () => {
  return (
    <>
      <HomeBannerTwo />
      <HomeTwoAbout />
      <ServiceHomeTwo />
      <HomeTwoCounter />
      <HomeTwoMap />
      <TeamArea />
      <HomeTwoClient />
      <BlogHome />
      <Subscribe />
    </>
  );
};

export default index2;
