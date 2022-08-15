import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Import Img
import Prismic from "prismic-javascript";
import api from "../../../prismicApi";

const HomeTwoAbout = () => {
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

  const hometwoimage = fetchData?.results?.map((items) => {
    return items?.data?.hometwoimage.url;
  });
  const hometwotitle = fetchData?.results?.map((items) => {
    return items?.data?.hometwotitle;
  });
  const hometwotext = fetchData?.results?.map((items) => {
    return items?.data?.hometwotext;
  });
  const hometwobtntext = fetchData?.results?.map((items) => {
    return items?.data?.hometwobtntext;
  });
  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section id="service_about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_service_img">
                <img
                  src={hometwoimage ? hometwoimage : `pending`}
                  alt="img-about"
                />
              </div>
            </div>
            <div className="col-lg-6  col-md-12 col-sm-12 col-12">
              <div className="about_service_text">
                <div className="heading-left-border">
                  <h2>{hometwotitle ? hometwotitle : `pending`}</h2>
                </div>
                <p>{hometwotext ? hometwotext : `pending`}</p>

                <Link to="/about" className="btn btn-theme">
                  {hometwobtntext ? hometwobtntext : `pending`}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTwoAbout;
