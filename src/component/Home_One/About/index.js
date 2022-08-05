import React, { useState, useEffect } from "react";
// Import Counter
import Counter from "./Counter";
// About Img
import api from "../../../prismicApi";
import Prismic from "prismic-javascript";

// Counter Data

const HomeAbout = () => {
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

  const countrytext = fetchData?.results?.map((items) => {
    return items.data.countrytext;
  });

  const companytext = fetchData?.results?.map((items) => {
    return items.data.companytext;
  });

  const portstext = fetchData?.results?.map((items) => {
    return items.data.portstext;
  });

  const countrycounter = fetchData?.results?.map((items) => {
    return items?.data?.countrycounter;
  });
  const companycounter = fetchData?.results?.map((items) => {
    return items?.data?.companycounter1;
  });
  const portscounter1 = fetchData?.results?.map((items) => {
    return items.data.portscounter1;
  });
  const CounterData = [
    {
      countStart: 0,
      countEnd: companycounter ? companycounter : 123,
      heading: companytext ? companytext : `pending`,
      icon: " fas fa-building",
    },
    {
      countStart: 0,
      countEnd: countrycounter ? countrycounter : 123,
      heading: countrytext ? countrytext : `pending`,
      icon: "fas fa-globe",
    },
    {
      countStart: 0,
      countEnd: portscounter1 ? portscounter1 : 123,
      heading: portstext ? portstext : `pending`,
      icon: " fas fa-building",
    },
  ];

  const globalimage = fetchData?.results?.map((items) => {
    return items.data.globalimage.url;
  });
  const globaltext = fetchData?.results?.map((items) => {
    return items.data.globaltext;
  });
  const allourefforts = fetchData?.results?.map((items) => {
    return items.data.allourefforts;
  });
  const Solving = fetchData?.results?.map((items) => {
    return items.data.Solving;
  });
  const Jonathon = fetchData?.results?.map((items) => {
    return items.data.Jonathon;
  });
  const Chairman = fetchData?.results?.map((items) => {
    return items.data.Chairman;
  });
  const signatureimage = fetchData?.results?.map((items) => {
    return items.data.signatureimage.url;
  });

  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section id="home_about_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_img">
                <img
                  src={globalimage ? globalimage : `pending`}
                  alt="About_Img"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_content">
                <div className="heading-left-border">
                  <h2>{globaltext ? globaltext : `pending`}</h2>
                </div>
                <h3>{allourefforts ? allourefforts : `pending`}</h3>
                <p>{Solving ? Solving : `pending`}</p>
                <div className="about_sign_arae">
                  <div className="distaion_area">
                    <h5>{Jonathon ? Jonathon : `pending`}</h5>
                    <h6>{Chairman ? Chairman : `pending`}</h6>
                  </div>
                  <div className="signature">
                    <img
                      src={signatureimage ? signatureimage : `pending`}
                      alt="About_Img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about_counter_area">
            <div className="row">
              {CounterData.map((data, index) => (
                <Counter
                  countStart={data.countStart}
                  countEnd={data.countEnd}
                  heading={data.heading}
                  icon={data.icon}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
