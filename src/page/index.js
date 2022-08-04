import React from "react";
import HomeBanner from "../component/Home_One/Banner";
import GetSchedule from "../component/Home_One/Get _Schedule";
import LogisticsService from "../component/Home_One/Logistics_Services";
import HomeAbout from "../component/Home_One/About";
import OurAdvantage from "../component/Home_One/Our_Advantages";
import MapArea from "../component/Home_One/Map";
import Testimonials from "../component/Home_One/Testimonial";
import PricingTable from "../component/Common/PricingTable";
import Subscribe from "../component/Common/Subscribe";
import BlogHome from "../component/Common/Blog";

const index = () => {
  return (
    <>
      <HomeBanner />
      <GetSchedule />
      <LogisticsService />
      <HomeAbout />
      <OurAdvantage />
      <MapArea />
      <Testimonials />
      <PricingTable />
      <Subscribe />
      <BlogHome />
    </>
  );
};

export default index;
