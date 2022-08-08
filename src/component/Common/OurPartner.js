import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import api from "../../prismicApi";
import Prismic from "prismic-javascript";

const OurPartner = () => {
  let responsive = {
    0: {
      items: 2,
    },
    600: {
      items: 2,
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
  const firstimage = fetchData?.results?.map((items) => {
    console.log(items.data, "Helo");
    return items.data.body[5].items[0].firstimage.url;
  });
  const secondimage = fetchData?.results?.map((items) => {
    return items.data.body[5].items[0].secondimage.url;
  });
  const thirdimage = fetchData?.results?.map((items) => {
    return items.data.body[5].items[0].thirdimage.url;
  });
  const fourthimage = fetchData?.results?.map((items) => {
    return items.data.body[5].items[0].fourthimage.url;
  });
  const fifthimage = fetchData?.results?.map((items) => {
    return items.data.body[5].items[0].fifthimage.url;
  });
  const OurPartnerData = [
    {
      img: firstimage ? firstimage : `pending`,
    },
    {
      img: secondimage ? secondimage : `pending`,
    },
    {
      img: thirdimage ? thirdimage : `pending`,
    },
    {
      img: fourthimage ? fourthimage : `pending`,
    },
    {
      img: fifthimage ? fifthimage : `pending`,
    },
  ];
  useEffect(() => {
    getServerSideProps();
  }, []);
  return (
    <>
      <section id="partner_area_slider">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="partner_heading">
                <h2>Our Partners:</h2>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="partner_slider_wrapper">
                <OwlCarousel
                  className="owl-theme"
                  responsive={responsive}
                  autoplay={true}
                  autoplayHoverPause={true}
                  autoplayTimeout={2500}
                  loop={true}
                  margin={10}
                  nav={false}
                  dots={false}
                >
                  {OurPartnerData.map((data, index) => (
                    <div className="partner_logo" key={index}>
                      <img src={data.img} alt="logo-img" />
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPartner;
