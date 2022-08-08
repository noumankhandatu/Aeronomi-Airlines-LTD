import React, { useState, useEffect } from "react";
import Prismic from "prismic-javascript";
import api from "../../prismicApi";

const ServiceContent = () => {
  const [toggleFn, setToggleFn] = useState(true);
  const [fetchData, setFetchData] = useState("");
  async function getServerSideProps() {
    const client = Prismic.client(api);
    client
      .query([Prismic.Predicates.at("document.type", "services")])
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

  const servicesimage = fetchData?.results?.map((items) => {
    return items?.data?.servicesimage.url;
  });
  const headingone = fetchData?.results?.map((items) => {
    return items?.data?.headingone;
  });
  const paraone = fetchData?.results?.map((items) => {
    return items?.data?.paraone;
  });
  const servicetwoimage = fetchData?.results?.map((items) => {
    return items?.data?.servicetwoimage.url;
  });
  const paratwo = fetchData?.results?.map((items) => {
    return items?.data?.paratwo;
  });
  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <div className="col-lg-8">
        <div className="service_details_wrapper">
          <div className="service_details_items">
            <img src={servicesimage ? servicesimage : `pending`} alt="img" />
            <div className="service_details_para">
              <h3>{headingone ? headingone : `pending`}</h3>
              <p>{paraone ? paraone : `pending`}</p>
            </div>
          </div>
          <div className="service_details_items">
            <img src={servicetwoimage} alt="img" />
            <div className="service_details_para">
              <p>{paratwo ? paratwo : `pending`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceContent;
