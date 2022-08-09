import React, { useState, useEffect } from "react";
import CommonBanner from "../component/Common/Banner";
import ContactDetails from "../component/Contact";
import OurPartner from "../component/Common/OurPartner";
import Prismic from "prismic-javascript";
import api from "../prismicApi";

const Contact = () => {
  const [toggleFn, setToggleFn] = useState(true);
  const [fetchData, setFetchData] = useState("");
  async function getServerSideProps() {
    const client = Prismic.client(api);
    client
      .query([Prismic.Predicates.at("document.type", "contact")])
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
  const bannerheading = fetchData?.results?.map((items) => {
    return items.data.body[0].items[0].bannerheading;
  });
  const bannerimage = fetchData?.results?.map((items) => {
    return items.data.body[0].items[0].bgimage.url;
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
        image={bannerimage ? bannerimage : `pending`}
        heading={bannerheading ? bannerheading : `pending `}
        page={bannerpage ? bannerpage : `pending `}
      />
      <ContactDetails />
      <OurPartner />
    </>
  );
};

export default Contact;
