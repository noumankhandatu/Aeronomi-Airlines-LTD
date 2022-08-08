import React, { useState, useEffect } from "react";
import CommonBanner from "../component/Common/Banner";
import HomeTwoAbout from "../component/Home_Two/About";
import ServiceHomeTwo from "../component/Home_Two/Service";
import OurPartner from "../component/Common/OurPartner";
import TeamArea from "../component/Home_Two/Team";
import Prismic from "prismic-javascript";
import api from "../prismicApi";

const About = () => {
  const [toggleFn, setToggleFn] = useState(true);
  const [fetchData, setFetchData] = useState("");
  async function getServerSideProps() {
    const client = Prismic.client(api);
    client
      .query([Prismic.Predicates.at("document.type", "about")])
      .then((res) => {
        setFetchData(res);
      })
      .catch((err) => {
        console.log("err is ", err);
      });
  }
  if (toggleFn) {
    getServerSideProps();
    setToggleFn(!toggleFn);
  }
  const bgimage = fetchData?.results?.map((items) => {
    return items.data.body[0].items[0].bgimage.url;
  });
  const bannerheading = fetchData?.results?.map((items) => {
    return items.data.body[0].items[0].bannerheading;
  });
  const bannerpage = fetchData?.results?.map((items) => {
    return items.data.body[0].items[0].bannerpage;
  });
  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <CommonBanner
        heading={bannerheading ? bannerheading : `pending`}
        page={bannerpage ? bannerpage : `pending`}
        image={bgimage ? bgimage : `pending`}
      />
      <HomeTwoAbout />
      <ServiceHomeTwo />
      <TeamArea />
      <OurPartner />
    </>
  );
};

export default About;
