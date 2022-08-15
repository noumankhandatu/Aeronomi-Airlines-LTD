import React, { useState, useEffect } from "react";
import BlogSidebar from "../Common/BlogSidebar";
import BlogCard from "../Common/Blog/BlogCard";
import Pagination from "../Common/Pagination";
import Prismic from "prismic-javascript";
import api from "../../prismicApi";

const BlogWithSidebarArea = () => {
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
  const RealData = fetchData?.results?.map((items) => {
    return items.data.body[4].items;
  });
  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section id="blog_area_sidebar">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="row">
                {RealData &&
                  RealData[0]?.map((data, index) => (
                    <div
                      className="col-lg-12 col-md-12 col-sm-12 col-12"
                      key={index}
                    >
                      <BlogCard
                        img={data.img.url}
                        date={data.date}
                        heading={data.heading}
                        para={data.para}
                        name={data.name}
                        comment={data.comment}
                        month={data.month}
                        day={data.day}
                      />
                    </div>
                  ))}
                <div className="col-lg-12 col-md-12">
                  <Pagination />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogWithSidebarArea;
