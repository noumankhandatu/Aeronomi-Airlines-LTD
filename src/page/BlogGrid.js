import React, { useState, useEffect } from "react";
import CommonBanner from "../component/Common/Banner";
import BlogLayout from "../component/BlogGrid/index";
import OurPartner from "../component/Common/OurPartner";
import Prismic from "prismic-javascript";
import api from "../prismicApi";

const BlogGrid = () => {
  const [toggleFn, setToggleFn] = useState(true);
  const [fetchData, setFetchData] = useState("");
  async function getServerSideProps() {
    const client = Prismic.client(api);
    client
      .query([Prismic.Predicates.at("document.type", "blog")])
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
  const bannerpage = fetchData?.results?.map((items) => {
    return items.data.body[0].items[0].bannerpage;
  });
  const bgimage = fetchData?.results?.map((items) => {
    return items.data.body[0].items[0].bgimage.url;
  });

  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <CommonBanner
        image={bgimage ? bgimage : `pending`}
        heading={bannerheading ? bannerheading : `pending`}
        page={bannerpage ? bannerpage : `pending`}
      />
      <BlogLayout />
      <OurPartner />
    </>
  );
};

export default BlogGrid;
