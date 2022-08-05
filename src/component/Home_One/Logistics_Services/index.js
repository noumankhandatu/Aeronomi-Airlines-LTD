import React, { useState, useEffect } from "react";
// Import LogisticsCard
import LogisticsCard from "./LogisticsCard";
// import Section Heading
import SectionHeading from "../../Common/SectionHeading";
//  OwlCarousel Slider Import
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Prismic from "prismic-javascript";
import api from "../../../prismicApi";
const LogisticsService = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  let responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 2,
    },
    1200: {
      items: 3,
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
  const title = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].title;
  });
  const description = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].description;
  });

  const itemCaroTextOne = fetchData?.results?.map((items) => {
    return items.data.itemcarotextone;
  });
  const itemCaroTextTwo = fetchData?.results?.map((items) => {
    return items.data.itemcarotexttwo;
  });
  const itemCaroTextThree = fetchData?.results?.map((items) => {
    return items.data.itemcarotextthree;
  });

  const itemImageOne = fetchData?.results?.map((items) => {
    return items.data.itemimageone.url;
  });
  const itemHeadingOne = fetchData?.results?.map((items) => {
    return items.data.itemheadingone;
  });
  const itemParaOne = fetchData?.results?.map((items) => {
    return items.data.itemparaone;
  });

  const itemImageTwo = fetchData?.results?.map((items) => {
    return items.data.itemimagetwo.url;
  });
  const itemHeadingTwo = fetchData?.results?.map((items) => {
    return items.data.itemheadingtwo;
  });
  const itemParaTwo = fetchData?.results?.map((items) => {
    return items.data.itemparatwo;
  });

  const itemImageThree = fetchData?.results?.map((items) => {
    return items.data.itemimagethree.url;
  });
  const itemHeadingThree = fetchData?.results?.map((items) => {
    return items.data.itemheadingthree;
  });
  const itemParaThree = fetchData?.results?.map((items) => {
    return items.data.itemparathree;
  });

  const LogisticsData = [
    [
      {
        img: itemImageOne ? itemImageOne : `pending`,
        heading: itemHeadingOne ? itemHeadingOne : `pending`,
        para: itemParaOne ? itemParaOne : `pending`,
      },
      {
        img: itemImageTwo ? itemImageTwo : `pending`,
        heading: itemHeadingTwo ? itemHeadingTwo : `pending`,
        para: itemParaTwo ? itemParaTwo : `pending`,
      },
      {
        img: itemImageThree ? itemImageThree : `pending`,
        heading: itemHeadingThree ? itemHeadingThree : `pending`,
        para: itemParaThree ? itemParaThree : `pending`,
      },
    ],
    [
      {
        img: itemImageOne ? itemImageOne : `pending`,
        heading: itemHeadingOne ? itemHeadingOne : `pending`,
        para: itemParaOne ? itemParaOne : `pending`,
      },
      {
        img: itemImageTwo ? itemImageTwo : `pending`,
        heading: itemHeadingTwo ? itemHeadingTwo : `pending`,
        para: itemParaTwo ? itemParaTwo : `pending`,
      },
      {
        img: itemImageThree ? itemImageThree : `pending`,
        heading: itemHeadingThree ? itemHeadingThree : `pending`,
        para: itemParaThree ? itemParaThree : `pending`,
      },
    ],
    [
      {
        img: itemImageOne ? itemImageOne : `pending`,
        heading: itemHeadingOne ? itemHeadingOne : `pending`,
        para: itemParaOne ? itemParaOne : `pending`,
      },
      {
        img: itemImageTwo ? itemImageTwo : `pending`,
        heading: itemHeadingTwo ? itemHeadingTwo : `pending`,
        para: itemParaTwo ? itemParaTwo : `pending`,
      },
      {
        img: itemImageThree ? itemImageThree : `pending`,
        heading: itemHeadingThree ? itemHeadingThree : `pending`,
        para: itemParaThree ? itemParaThree : `pending`,
      },
    ],
  ];

  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section id="logistics_area">
        <div className="container">
          <SectionHeading
            heading={title ? title : `pending`}
            para={description ? description : `pending`}
          />
          <div className="row">
            <div className="col-md-12">
              <div className="logistics_wrappers">
                <div className="logistic_tabs_button">
                  <ul>
                    <li>
                      <button
                        className={sliderIndex === 0 ? "active" : ""}
                        onClick={() => setSliderIndex(0)}
                      >
                        {itemCaroTextOne ? itemCaroTextOne : `pending`}
                      </button>
                    </li>
                    <li>
                      <button
                        className={sliderIndex === 1 ? "active" : ""}
                        onClick={() => setSliderIndex(1)}
                      >
                        {itemCaroTextTwo ? itemCaroTextTwo : `pending`}
                      </button>
                    </li>
                    <li>
                      <button
                        className={sliderIndex === 2 ? "active" : ""}
                        onClick={() => setSliderIndex(2)}
                      >
                        {itemCaroTextThree ? itemCaroTextThree : `pending`}
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="logistics_area_slider">
                  {sliderIndex === 0 && (
                    <OwlCarousel
                      className="owl-theme"
                      responsive={responsive}
                      autoplay={true}
                      autoplayHoverPause={true}
                      autoplayTimeout={2500}
                      loop={true}
                      margin={10}
                      nav={true}
                      dots={false}
                    >
                      {LogisticsData[0].map((data, index) => (
                        <LogisticsCard
                          img={data.img}
                          heading={data.heading}
                          para={data.para}
                          key={index}
                        />
                      ))}
                    </OwlCarousel>
                  )}

                  {sliderIndex === 1 && (
                    <OwlCarousel
                      className="owl-theme"
                      responsive={responsive}
                      autoplay={true}
                      autoplayHoverPause={true}
                      autoplayTimeout={2500}
                      loop={true}
                      margin={10}
                      nav={true}
                      dots={false}
                    >
                      {LogisticsData[1].map((data, index) => (
                        <LogisticsCard
                          img={data.img}
                          heading={data.heading}
                          para={data.para}
                          key={index}
                        />
                      ))}
                    </OwlCarousel>
                  )}

                  {sliderIndex === 2 && (
                    <OwlCarousel
                      className="owl-theme"
                      responsive={responsive}
                      autoplay={true}
                      autoplayHoverPause={true}
                      autoplayTimeout={2500}
                      loop={true}
                      margin={10}
                      nav={true}
                      dots={false}
                    >
                      {LogisticsData[2].map((data, index) => (
                        <LogisticsCard
                          img={data.img}
                          heading={data.heading}
                          para={data.para}
                          key={index}
                        />
                      ))}
                    </OwlCarousel>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogisticsService;
