import React from "react";
import CommonBanner from "../component/Common/Banner";
import BlogLayout from "../component/BlogGrid/index";
import OurPartner from "../component/Common/OurPartner";

const BlogGrid = () => {
  return (
    <>
      <CommonBanner heading="Blog Grid" page="Blog Grid" />
      <BlogLayout />
      <OurPartner />
    </>
  );
};

export default BlogGrid;
