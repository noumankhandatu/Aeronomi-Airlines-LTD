import React, { useState, useEffect } from "react";
import Prismic from "prismic-javascript";

// Import ClientLogo
//  OwlCarousel Slider Import
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import api from "../../../prismicApi";

const ClientLogos = () => {
  let responsiveOne = {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    960: {
      items: 4,
    },
    1200: {
      items: 5,
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
  const firstimage = fetchData?.results?.map((items) => {
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
  const ClientLogo = [
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
      <div id="client_logo_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="client_logo_slider">
                <OwlCarousel
                  margin={10}
                  responsive={responsiveOne}
                  loop={true}
                  autoplay={true}
                  autoplayHoverPause={true}
                  autoplayTimeout={2500}
                >
                  {ClientLogo.map((data, index) => (
                    <a href="#!" key={index}>
                      <img src={data.img} alt="logo img" />
                    </a>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientLogos;
