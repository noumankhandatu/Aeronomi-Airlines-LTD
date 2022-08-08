import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Prismic from "prismic-javascript";
import api from "../../prismicApi";

// ServiceSideBar Area
const ServiceSideBar = () => {
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

  const Service = fetchData?.results?.map((items) => {
    return items?.data?.service;
  });
  const Finance = fetchData?.results?.map((items) => {
    return items?.data?.finance;
  });
  const Healthcare = fetchData?.results?.map((items) => {
    return items?.data?.healthcare;
  });

  const Strategic = fetchData?.results?.map((items) => {
    return items?.data?.strategic;
  });

  const Contingency = fetchData?.results?.map((items) => {
    return items?.data?.contingency;
  });
  const Mergers = fetchData?.results?.map((items) => {
    return items?.data?.mergers;
  });
  const Marketing = fetchData?.results?.map((items) => {
    return items?.data?.marketing;
  });
  const Brochures = fetchData?.results?.map((items) => {
    return items?.data?.brochures;
  });
  const Brochur = fetchData?.results?.map((items) => {
    return items?.data?.brochur;
  });
  const Compa = fetchData?.results?.map((items) => {
    return items?.data?.compa;
  });
  const Contact = fetchData?.results?.map((items) => {
    return items?.data?.contact;
  });
  const Visit = fetchData?.results?.map((items) => {
    return items?.data?.visit;
  });
  const Cargo = fetchData?.results?.map((items) => {
    return items?.data?.cargo;
  });
  const Call = fetchData?.results?.map((items) => {
    return items?.data?.call;
  });
  const Office = fetchData?.results?.map((items) => {
    return items?.data?.office;
  });
  const Tollfree = fetchData?.results?.map((items) => {
    return items?.data?.tollfree;
  });
  const Mail = fetchData?.results?.map((items) => {
    return items?.data?.mail;
  });
  const Mailus = fetchData?.results?.map((items) => {
    return items?.data?.mailus;
  });
  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <div className="col-lg-4">
        <div className="service_details_sidebar">
          <div className="sidebar_service_wrappers">
            <h3>{Service ? Service : `pending`}</h3>
            <ul>
              <li>
                <Link to="/service">{Finance ? Finance : `pending`}</Link>
              </li>
              <li>
                <Link to="/service">{Healthcare ? Healthcare : `pending`}</Link>
              </li>
              <li>
                <Link to="/service">{Strategic ? Strategic : `pending`}</Link>
              </li>
              <li>
                <Link to="/service">
                  {Contingency ? Contingency : `pending`}
                </Link>
              </li>
              <li>
                <Link to="/service">{Mergers ? Mergers : `pending`}</Link>
              </li>
              <li>
                <Link to="/service">{Marketing ? Marketing : `pending`}</Link>
              </li>
            </ul>
          </div>
          <div className="sidebar_service_wrappers">
            <h3>{Brochures ? Brochures : `pending`}</h3>
            <ul>
              <li>
                <a href="#!">
                  <i className="far fa-file-pdf"></i>{" "}
                  {Brochur ? Brochur : `pending`}
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="far fa-file-word"></i>
                  {Compa ? Compa : `pending`}
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar_service_wrappers">
            <h3>{Contact ? Contact : `pending`}</h3>
            <div className="contact_sidebar">
              <h6>{Visit ? Visit : `pending`}</h6>
              <p>{Cargo ? Cargo : `pending`}</p>
            </div>
            <div className="contact_sidebar">
              <h6>{Call ? Call : `pending`}</h6>
              <p>{Office ? Office : `pending`}</p>
              <p> {Tollfree ? Tollfree : `pending`}</p>
            </div>
            <div className="contact_sidebar">
              <h6>{Mail ? Mail : `pending`}</h6>
              <p>{Mailus ? Mailus : `pending`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSideBar;
