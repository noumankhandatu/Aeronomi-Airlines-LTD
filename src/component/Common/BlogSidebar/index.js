import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Import BlogData Component
import Prismic from "prismic-javascript";
import api from "../../../prismicApi";

const BlogSidebar = () => {
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
    return items.data.body[5].items;
  });

  const Category = fetchData?.results?.map((items) => {
    return items.data.body[6].items;
  });

  const search = fetchData?.results?.map((items) => {
    return items.data.search;
  });
  const popular = fetchData?.results?.map((items) => {
    return items.data.popular;
  });
  const catogery = fetchData?.results?.map((items) => {
    return items.data.catogery;
  });
  useEffect(() => {
    getServerSideProps();
  }, []);

  // const PopularTag = [
  //   {
  //     list: "Cargo",
  //   },
  //   {
  //     list: "Contact",
  //   },
  //   {
  //     list: "Ground",
  //   },
  //   {
  //     list: "Management",
  //   },
  //   {
  //     list: "Ocean",
  //   },
  //   {
  //     list: "Offers",
  //   },
  //   {
  //     list: "Shipment",
  //   },
  //   {
  //     list: "Transporation",
  //   },
  // ];
  return (
    <>
      <div className="blog_sidebar_wrapper">
        <div className="blog_sidebar_item">
          <div className="blog_sidebar_heading">
            <h3>{search ? search : `pending`}</h3>
          </div>
          <div className="blog-search">
            <input type="text" className="form-control" />
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="blog_sidebar_item">
          <div className="blog_sidebar_heading">
            <h3>{catogery ? catogery : `pending`}</h3>
          </div>
          <div className="sidebar-categorie-list">
            <ul>
              {Category &&
                Category[0].map((data, index) => (
                  <li key={index}>
                    <a href="#!">
                      <span>{data.list ? data.list : `pending`}</span>
                      <span>{data.count ? data.count : `pending`}</span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="blog_sidebar_item">
          <div className="blog_sidebar_heading">
            <h3>{popular ? popular : `pending`}</h3>
          </div>
          <div className="popular_post_wrapper">
            {RealData &&
              RealData[0].map((data, index) => (
                <div className="popular_post_item" key={index}>
                  <div className="populer_post_img">
                    <Link to="/blog_details">
                      <img
                        src={data.bgimage ? data.bgimage.url : `pending`}
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="popular_post_text">
                    <h4>
                      <Link to="/blog_details">
                        {data.bannerheading ? data.bannerheading : `pending`}
                      </Link>
                    </h4>
                    <p>
                      <i className="far fa-clock"></i>
                      {data.bannerpage ? data.bannerpage : `pending`}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* <div className="blog_sidebar_item">
          <div className="blog_sidebar_heading">
            <h3>Popular Tag</h3>
          </div>
          <div className="tags_blog_sidebar">
            {PopularTag.map((data, index) => (
              <Link to="/blog_details" key={index}>
                {data.list}
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default BlogSidebar;
