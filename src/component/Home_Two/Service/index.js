import React, { useState, useEffect } from "react";
// Import SectionHeading
import SectionHeading from "../../Common/SectionHeading";
// Import ServiceCard
import ServiceCard from "../../Common/Service/ServiceCard";
// Import ServiceData
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Prismic from "prismic-javascript";
import api from "../../../prismicApi";

const ServiceHomeTwo = () => {
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
  const title = fetchData?.results?.map((items) => {
    return items.data.body[1].items[0].title;
  });
  const description = fetchData?.results?.map((items) => {
    return items.data.body[1].items[0].description;
  });

  //   array
  const imageOne = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].image.url;
  });
  const headingOne = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].name;
  });
  const paraOne = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].dest;
  });

  const buttonOne = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].para;
  });
  // 2
  const imageTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].image.url;
  });
  const headingTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].name;
  });
  const paraTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].dest;
  });

  const buttonTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].para;
  });
  //   3
  const imageThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].image.url;
  });
  const headingThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].name;
  });
  const paraThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].dest;
  });

  const buttonThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].para;
  });
  //   4
  const imageFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].image.url;
  });
  const headingFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].name;
  });
  const paraFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].dest;
  });

  const buttonFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].para;
  });
  //   5
  const imageFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].image.url;
  });
  const headingFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].name;
  });
  const paraFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].dest;
  });

  const buttonFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].para;
  });
  //   6
  const imageSix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].image.url;
  });
  const headingSix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].name;
  });
  const paraSix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].dest;
  });

  const buttonSix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].para;
  });
  //   7
  const imageSeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[6].image.url;
  });
  const headingSeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[6].name;
  });
  const paraSeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[6].dest;
  });

  const buttonSeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[6].para;
  });
  //   8
  const imageEight = fetchData?.results?.map((items) => {
    return items.data.body[2].items[7].image.url;
  });
  const headingEight = fetchData?.results?.map((items) => {
    return items.data.body[2].items[7].name;
  });
  const paraEight = fetchData?.results?.map((items) => {
    return items.data.body[2].items[7].dest;
  });

  const buttonEight = fetchData?.results?.map((items) => {
    return items.data.body[2].items[7].para;
  });

  // array
  const ServiceData = [
    {
      img: imageOne ? imageOne : `pending`,
      heading: headingOne ? headingOne : `pending`,
      para: paraOne ? paraOne : `pending`,
      button: buttonOne ? buttonOne : `pending`,
    },
    {
      img: imageTwo ? imageTwo : `pending`,
      heading: headingTwo ? headingTwo : `pending`,
      para: paraTwo ? paraTwo : `pending`,
      button: buttonTwo ? buttonTwo : `pending`,
    },
    {
      img: imageThree ? imageThree : `pending`,
      heading: headingThree ? headingThree : `pending`,
      para: paraThree ? paraThree : `pending`,
      button: buttonThree ? buttonThree : `pending`,
    },
    {
      img: imageFour ? imageFour : `pending`,
      heading: headingFour ? headingFour : `pending`,
      para: paraFour ? paraFour : `pending`,
      button: buttonFour ? buttonFour : `pending`,
    },
    {
      img: imageFive ? imageFive : `pending`,
      heading: headingFive ? headingFive : `pending`,
      para: paraFive ? paraFive : `pending`,
      button: buttonFive ? buttonFive : `pending`,
    },
    {
      img: imageSix ? imageSix : `pending`,
      heading: headingSix ? headingSix : `pending`,
      para: paraSix ? paraSix : `pending`,
      button: buttonSix ? buttonSix : `pending`,
    },
    {
      img: imageSeven ? imageSeven : `pending`,
      heading: headingSeven ? headingSeven : `pending`,
      para: paraSeven ? paraSeven : `pending`,
      button: buttonSeven ? buttonSeven : `pending`,
    },
    {
      img: imageEight ? imageEight : `pending`,
      heading: headingEight ? headingEight : `pending`,
      para: paraEight ? paraEight : `pending`,
      button: buttonEight ? buttonEight : `pending`,
    },
  ];
  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section id="home_two_service">
        <div className="container">
          <SectionHeading
            heading={title ? title : `pending`}
            para={description ? description : `pending`}
          />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="service_slider_home_two">
                <OwlCarousel
                  className="owl-theme"
                  responsive={responsive}
                  autoplay={true}
                  autoplayHoverPause={true}
                  autoplayTimeout={2500}
                  loop={true}
                  nav={false}
                  dots={true}
                  margin={30}
                >
                  {ServiceData.map((data, index) => (
                    <ServiceCard
                      img={data.img}
                      heading={data.heading}
                      para={data.para}
                      button={data.button}
                      key={index}
                    />
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

export default ServiceHomeTwo;
