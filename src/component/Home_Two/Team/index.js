import React, { useState, useEffect } from "react";
import SectionHeading from "../../Common/SectionHeading";
import TeamCard from "../../Common/Team/TeamCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import api from "../../../prismicApi";
import Prismic from "prismic-javascript";
const TeamArea = () => {
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
    return items.data.body[3].items[0].title;
  });
  const description = fetchData?.results?.map((items) => {
    return items.data.body[3].items[0].description;
  });

  //   array
  const imageOne = fetchData?.results?.map((items) => {
    return items.data.body[4].items[0].image.url;
  });
  const headingOne = fetchData?.results?.map((items) => {
    return items.data.body[4].items[0].name;
  });
  const paraOne = fetchData?.results?.map((items) => {
    return items.data.body[4].items[0].dest;
  });

  const buttonOne = fetchData?.results?.map((items) => {
    return items.data.body[4].items[0].para;
  });
  // 2
  const imageTwo = fetchData?.results?.map((items) => {
    return items.data.body[4].items[1].image.url;
  });
  const headingTwo = fetchData?.results?.map((items) => {
    return items.data.body[4].items[1].name;
  });
  const paraTwo = fetchData?.results?.map((items) => {
    return items.data.body[4].items[1].dest;
  });

  const buttonTwo = fetchData?.results?.map((items) => {
    return items.data.body[4].items[1].para;
  });
  //   3
  const imageThree = fetchData?.results?.map((items) => {
    return items.data.body[4].items[2].image.url;
  });
  const headingThree = fetchData?.results?.map((items) => {
    return items.data.body[4].items[2].name;
  });
  const paraThree = fetchData?.results?.map((items) => {
    return items.data.body[4].items[2].dest;
  });

  const buttonThree = fetchData?.results?.map((items) => {
    return items.data.body[4].items[2].para;
  });
  //   4
  const imageFour = fetchData?.results?.map((items) => {
    return items.data.body[4].items[3].image.url;
  });
  const headingFour = fetchData?.results?.map((items) => {
    return items.data.body[4].items[3].name;
  });
  const paraFour = fetchData?.results?.map((items) => {
    return items.data.body[4].items[3].dest;
  });

  const buttonFour = fetchData?.results?.map((items) => {
    return items.data.body[4].items[3].para;
  });
  //   5
  const imageFive = fetchData?.results?.map((items) => {
    return items.data.body[4].items[4].image.url;
  });
  const headingFive = fetchData?.results?.map((items) => {
    return items.data.body[4].items[4].name;
  });
  const paraFive = fetchData?.results?.map((items) => {
    return items.data.body[4].items[4].dest;
  });

  const buttonFive = fetchData?.results?.map((items) => {
    return items.data.body[4].items[4].para;
  });
  //   6
  const imageSix = fetchData?.results?.map((items) => {
    return items.data.body[4].items[5].image.url;
  });
  const headingSix = fetchData?.results?.map((items) => {
    return items.data.body[4].items[5].name;
  });
  const paraSix = fetchData?.results?.map((items) => {
    return items.data.body[4].items[5].dest;
  });

  const buttonSix = fetchData?.results?.map((items) => {
    return items.data.body[4].items[5].para;
  });

  // array
  const TeamData = [
    {
      img: imageOne ? imageOne : `pending`,
      name: headingOne ? headingOne : `pending`,
      para: paraOne ? paraOne : `pending`,
      des: buttonOne ? buttonOne : `pending`,
    },
    {
      img: imageTwo ? imageTwo : `pending`,
      name: headingTwo ? headingTwo : `pending`,
      para: paraTwo ? paraTwo : `pending`,
      des: buttonTwo ? buttonTwo : `pending`,
    },
    {
      img: imageThree ? imageThree : `pending`,
      name: headingThree ? headingThree : `pending`,
      para: paraThree ? paraThree : `pending`,
      des: buttonThree ? buttonThree : `pending`,
    },
    {
      img: imageFour ? imageFour : `pending`,
      name: headingFour ? headingFour : `pending`,
      para: paraFour ? paraFour : `pending`,
      des: buttonFour ? buttonFour : `pending`,
    },
    {
      img: imageFive ? imageFive : `pending`,
      name: headingFive ? headingFive : `pending`,
      para: paraFive ? paraFive : `pending`,
      des: buttonFive ? buttonFive : `pending`,
    },
    {
      img: imageSix ? imageSix : `pending`,
      name: headingSix ? headingSix : `pending`,
      para: paraSix ? paraSix : `pending`,
      des: buttonSix ? buttonSix : `pending`,
    },
  ];
  useEffect(() => {
    getServerSideProps();
  }, []);
  return (
    <>
      <section id="team_area">
        <div className="container">
          <SectionHeading
            heading={title ? title : `pending`}
            para={description ? description : `pending`}
          />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="team-slider">
                <OwlCarousel
                  className="owl-theme"
                  responsive={responsive}
                  autoplay={false}
                  autoplayHoverPause={true}
                  autoplayTimeout={2500}
                  loop={true}
                  margin={10}
                  nav={false}
                  dots={true}
                >
                  {TeamData.map((data, index) => (
                    <TeamCard
                      img={data.img}
                      heading={data.heading}
                      para={data.para}
                      name={data.name}
                      des={data.des}
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

export default TeamArea;
