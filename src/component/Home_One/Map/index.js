import React, { useState, useEffect } from "react";
import api from "../../../prismicApi";
// Import Map
import Maps from "../../Common/Map";
import Prismic from "prismic-javascript";
const MapArea = () => {
  const [toggleFn, setToggleFn] = useState(true);
  const [fetchData, setFetchData] = useState("");
  async function getServerSideProps() {
    const client = Prismic.client(api);
    client
      .query([Prismic.Predicates.at("document.type", "home")])
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
  const mapheading = fetchData?.results?.map((items) => {
    return items?.data?.mapheading;
  });
  const maptitle = fetchData?.results?.map((items) => {
    return items?.data?.maptitle;
  });
  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section id="maps_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="heading-left-border">
                <h2>{mapheading ? mapheading : `pending`}</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="maps-right-side-text">
                <p>{maptitle ? maptitle : `pending`}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="maps-area">
                <Maps />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapArea;
