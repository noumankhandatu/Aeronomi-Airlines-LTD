import React, { useState, useEffect } from "react";
// Import All Blog Details Components
import BlogSidebar from "../Common/BlogSidebar";
import AllComment from "../BlogDetails/AllComment";
import ReplayForm from "../BlogDetails/ReplayForm";
import Prismic from "prismic-javascript";
import api from "../../prismicApi";
const BlogDetailsArea = () => {
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
  const image = fetchData?.results?.map((items) => {
    return items.data.image.url;
  });

  const owner = fetchData?.results?.map((items) => {
    return items.data.owner;
  });
  const date = fetchData?.results?.map((items) => {
    return items.data.date;
  });
  const month = fetchData?.results?.map((items) => {
    return items.data.month;
  });
  const label = fetchData?.results?.map((items) => {
    return items.data.label;
  });
  const para = fetchData?.results?.map((items) => {
    return items.data.para;
  });
  const blockquote = fetchData?.results?.map((items) => {
    return items.data.blockquote;
  });
  const tag = fetchData?.results?.map((items) => {
    return items.data.tag;
  });
  const tagone = fetchData?.results?.map((items) => {
    return items.data.tagone;
  });
  const tagtwo = fetchData?.results?.map((items) => {
    return items.data.tagtwo;
  });
  const tagthree = fetchData?.results?.map((items) => {
    return items.data.tagthree;
  });
  const tagfour = fetchData?.results?.map((items) => {
    return items.data.tagfour;
  });
  const tagfive = fetchData?.results?.map((items) => {
    return items.data.tagfive;
  });
  const share = fetchData?.results?.map((items) => {
    return items.data.share;
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
              <div className="single_blog_wrappers">
                <div className="blog_single_item">
                  <div className="blog_single_text_area">
                    <div className="blog_single_top_img">
                      <img src={image ? image : `pending`} alt="Details_Img" />
                    </div>
                    <div className="blog_single_viewer_area ">
                      <ul>
                        <li>
                          <a href="#!">
                            <i className="far fa-user"></i>
                            {owner ? owner : `pending`}
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="far fa-clock"></i>
                            {date ? date : `pending`}
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="far fa-comment"></i>
                            {month ? month : `pending`}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="blog_single_heading">
                      <h3>{label ? label : `pending`}</h3>
                    </div>
                    <div className="blog_single_text">
                      <p>{para ? para : `pending`}</p>
                      <blockquote>
                        {blockquote ? blockquote : `pending`}
                      </blockquote>
                    </div>
                    <div className="blog_single_tags_bottom">
                      <ul>
                        <li>
                          <i className="fas fa-tags"></i>{" "}
                          {tag ? tag : `pending`}
                        </li>
                        <li>
                          <a href="!#">{tagone ? tagone : `pending`}</a>
                        </li>
                        <li>
                          <a href="!#">{tagtwo ? tagtwo : `pending`}</a>
                        </li>
                        <li>
                          <a href="!#">{tagthree ? tagthree : `pending`}</a>
                        </li>
                        <li>
                          <a href="!#">{tagfour ? tagfour : `pending`}</a>
                        </li>
                        <li>
                          <a href="!#">{tagfive ? tagfive : `pending`}</a>
                        </li>
                      </ul>
                      <ul className="shared_post">
                        <li>
                          <a href="#!">
                            <i className="fas fa-share-alt"></i>
                            {share ? share : `pending`}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <AllComment />
                <ReplayForm />
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

export default BlogDetailsArea;
