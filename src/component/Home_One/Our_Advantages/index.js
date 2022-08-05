import React, { useEffect, useState } from "react";
// Import OurAdvantageCard
import OurAdvantageCard from "../Our_Advantages/Our_Advantage_Card";
//  OwlCarousel Slider Import
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import api from "../../../prismicApi";
import Prismic from "prismic-javascript";
const OurAdvantage = () => {
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
  const advimage = fetchData?.results?.map((items) => {
    return items.data.advimage.url;
  });

  const advheading = fetchData?.results?.map((items) => {
    return items.data.advheading;
  });

  const advlogoone = fetchData?.results?.map((items) => {
    return items.data.advlogoone.url;
  });

  const advtitileone = fetchData?.results?.map((items) => {
    return items.data.advtitileone;
  });
  const advdesone = fetchData?.results?.map((items) => {
    return items.data.advdesone;
  });

  const advlogotwo = fetchData?.results?.map((items) => {
    return items.data.advimagetwo.url;
  });

  const advtitiletwo = fetchData?.results?.map((items) => {
    return items.data.advtitiletwo;
  });
  const advdestwo = fetchData?.results?.map((items) => {
    return items.data.advdestwo;
  });

  const advlogothree = fetchData?.results?.map((items) => {
    return items.data.advimagethree.url;
  });

  const advtitilethree = fetchData?.results?.map((items) => {
    return items.data.advtitilethree;
  });
  const advdesthree = fetchData?.results?.map((items) => {
    return items.data.advdesthree;
  });

  const OurAdventagesData = [
    [
      {
        img: advlogoone ? advlogoone : `pending`,
        heading: advtitileone ? advtitileone : `pending`,
        para: advdesone ? advdesone : `pending`,
      },
      {
        img: advlogotwo ? advlogotwo : `pending`,
        heading: advtitiletwo ? advtitiletwo : `pending`,
        para: advdestwo ? advdestwo : `pending`,
      },
      {
        img: advlogothree ? advlogothree : `pending`,
        heading: advtitilethree ? advtitilethree : `pending`,
        para: advdesthree ? advdesthree : `pending`,
      },
    ],
    [
      {
        img: advlogoone ? advlogoone : `pending`,
        heading: advtitileone ? advtitileone : `pending`,
        para: advdesone ? advdesone : `pending`,
      },
      {
        img: advlogotwo ? advlogotwo : `pending`,
        heading: advtitiletwo ? advtitiletwo : `pending`,
        para: advdestwo ? advdestwo : `pending`,
      },
      {
        img: advlogothree ? advlogothree : `pending`,
        heading: advtitilethree ? advtitilethree : `pending`,
        para: advdesthree ? advdesthree : `pending`,
      },
    ],
    [
      {
        img: advlogoone ? advlogoone : `pending`,
        heading: advtitileone ? advtitileone : `pending`,
        para: advdesone ? advdesone : `pending`,
      },
      {
        img: advlogotwo ? advlogotwo : `pending`,
        heading: advtitiletwo ? advtitiletwo : `pending`,
        para: advdestwo ? advdestwo : `pending`,
      },
      {
        img: advlogothree ? advlogothree : `pending`,
        heading: advtitilethree ? advtitilethree : `pending`,
        para: advdesthree ? advdesthree : `pending`,
      },
    ],
  ];

  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section
        id="our_advantages_area"
        style={{ backgroundImage: `url(${advimage ? advimage : `pending`})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="our_advantages_inner">
                <div className="heading-left-border">
                  <h2>{advheading ? advheading : `pending`}</h2>
                </div>
                <div className="advantages_slider">
                  <OwlCarousel
                    className="owl-theme"
                    responsive={responsive}
                    autoplay={true}
                    dots={true}
                    autoplayHoverPause={true}
                    autoplayTimeout={2500}
                  >
                    {OurAdventagesData.map((advantages, index) => (
                      <div className="our_advantages_item" key={index}>
                        {advantages.map((data, index) => (
                          <OurAdvantageCard
                            key={index}
                            img={data.img}
                            heading={data.heading}
                            para={data.para}
                          />
                        ))}
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurAdvantage;
