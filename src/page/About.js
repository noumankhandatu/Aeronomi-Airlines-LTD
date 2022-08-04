import React from "react";
import CommonBanner from "../component/Common/Banner";
import HomeTwoAbout from "../component/Home_Two/About";
import ServiceHomeTwo from "../component/Home_Two/Service";
import OurPartner from "../component/Common/OurPartner";
import TeamArea from "../component/Home_Two/Team";

const About = () => {
  return (
    <>
      <CommonBanner heading="About" page="About" />
      <HomeTwoAbout />
      <ServiceHomeTwo />
      <TeamArea />
      <OurPartner />
    </>
  );
};

export default About;
