import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//  OwlCarousel Slider Import
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import api from "../../../prismicApi";
import Prismic from "prismic-javascript";

const HomeBanner = () => {
  let responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  };
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
  const mapper = fetchData?.results?.map((items) => {
    return items?.data?.body[0]?.items;
  });
  const firstCaroBtnText = mapper?.map((items) => {
    return items[0].buttontext;
  });

  const firstCaroImageOne = mapper?.map((items) => {
    return items[0].image1.url;
  });
  const firstCaroBtnDes = mapper?.map((items) => {
    return <span>{items[0].description}</span>;
  });
  const firstCaroBtnTitle = mapper?.map((items) => {
    return <span>{items[0].title1}</span>;
  });

  const SecondCaroImageOne = mapper?.map((items) => {
    return items[1].image1.url;
  });
  const SecondCaroBtnText = mapper?.map((items) => {
    return items[1].buttontext;
  });
  const SecondCaroDes = mapper?.map((items) => {
    return <span>{items[1].description}</span>;
  });
  const SecondCaroTitle = mapper?.map((items) => {
    return <span>{items[1].title1}</span>;
  });

  const ThirdCaroImageOne = mapper?.map((items) => {
    return items[2].image1.url;
  });
  const ThirdCaroBtnText = mapper?.map((items) => {
    return items[2].buttontext;
  });
  const ThirdCaroDes = mapper?.map((items) => {
    return <span>{items[2].description}</span>;
  });
  const ThirdCaroTitle = mapper?.map((items) => {
    return <span>{items[2].title1}</span>;
  });

  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section id="homeOne_banner">
        <div className="banner-slider">
          <OwlCarousel
            className="owl-theme"
            responsive={responsive}
            autoplay={true}
            autoplayHoverPause={true}
            autoplayTimeout={2500}
            loop={true}
            nav={false}
            dots={true}
          >
            <div
              className="banner-item "
              style={{
                backgroundImage: `url(${
                  firstCaroImageOne ? firstCaroImageOne : `pending`
                })`,
              }}
            >
              <div className="container">
                <div className="banner_one_inner">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                      <div className="banner-text">
                        <h1>
                          {firstCaroBtnTitle ? firstCaroBtnTitle : `pending`}
                          <br />
                        </h1>
                        <p>{firstCaroBtnDes ? firstCaroBtnDes : `pending`}</p>
                        <Link className="btn btn-theme" to="/request_quote">
                          {firstCaroBtnText ? firstCaroBtnText : `pending`}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="banner-item "
              style={{
                backgroundImage: `url(${
                  SecondCaroImageOne ? SecondCaroImageOne : `pending`
                })`,
              }}
            >
              <div className="container">
                <div className="banner_one_inner">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                      <div className="banner-text">
                        <h1>
                          {SecondCaroTitle ? SecondCaroTitle : `pending`}
                          <br />
                        </h1>
                        <p>{SecondCaroDes ? SecondCaroDes : `pending`}</p>
                        <Link className="btn btn-theme" to="/request_quote">
                          {SecondCaroBtnText ? SecondCaroBtnText : `pending`}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="banner-item "
              style={{
                backgroundImage: `url(${
                  ThirdCaroImageOne ? ThirdCaroImageOne : `pending`
                })`,
              }}
            >
              <div className="container">
                <div className="banner_one_inner">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                      <div className="banner-text">
                        <h1>
                          {ThirdCaroTitle ? ThirdCaroTitle : `pending`}
                          <br />
                        </h1>
                        <p>{ThirdCaroDes ? ThirdCaroDes : `pending`}</p>
                        <Link className="btn btn-theme" to="/request_quote">
                          {ThirdCaroBtnText ? ThirdCaroBtnText : `pending`}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
        <div className="banner_social_icon">
          <ul>
            <li>
              <a href="#!">
                <i className="fab facebook fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab twitter fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab instagram fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab linkedin fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
