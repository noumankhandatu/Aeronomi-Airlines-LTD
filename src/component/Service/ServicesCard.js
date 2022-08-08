import React, { useState, useEffect } from "react";
import api from "../../prismicApi";
import SectionHeading from "../Common/SectionHeading";
import ServiceCard from "../Common/Service/ServiceCard";
import Prismic from "prismic-javascript";

const ServicesCard = () => {
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
  const title = fetchData?.results?.map((items) => {
    return items.data.body[1].items[0].title;
  });
  const description = fetchData?.results?.map((items) => {
    return items.data.body[1].items[0].description;
  });
  // array 1
  const imgOne = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].image.url;
  });
  const paraOne = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].para;
  });
  const nameOne = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].name;
  });
  const destOne = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].dest;
  });
  //   2
  const imgTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].image.url;
  });
  const paraTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].para;
  });
  const nameTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].name;
  });
  const destTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].dest;
  });
  // 3
  const imgThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].image.url;
  });
  const paraThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].para;
  });
  const nameThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].name;
  });
  const destThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].dest;
  });
  // 4
  const imgFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].image.url;
  });
  const paraFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].para;
  });
  const nameFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].name;
  });
  const destFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].dest;
  });
  //   5
  const imgFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].image.url;
  });
  const paraFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].para;
  });
  const nameFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].name;
  });
  const destFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].dest;
  });
  //   6
  const imgSix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].image.url;
  });
  const paraSix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].para;
  });
  const nameSix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].name;
  });
  const destSix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].dest;
  });
  //   7
  const imgSeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[6].image.url;
  });
  const paraSeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[6].para;
  });
  const nameSeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[6].name;
  });
  const destSeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[6].dest7;
  });
  //   8
  const imgEight = fetchData?.results?.map((items) => {
    return items.data.body[2].items[7].image.url;
  });
  const paraEight = fetchData?.results?.map((items) => {
    return items.data.body[2].items[7].para;
  });
  const nameEight = fetchData?.results?.map((items) => {
    return items.data.body[2].items[7].name;
  });
  const destEight = fetchData?.results?.map((items) => {
    return items.data.body[2].items[7].dest;
  });
  //   9
  const imgNine = fetchData?.results?.map((items) => {
    return items.data.body[2].items[8].image.url;
  });
  const paraNine = fetchData?.results?.map((items) => {
    return items.data.body[2].items[8].para;
  });
  const nameNine = fetchData?.results?.map((items) => {
    return items.data.body[2].items[8].name;
  });
  const destNine = fetchData?.results?.map((items) => {
    return items.data.body[2].items[8].dest;
  });
  //   end array
  const ServiceData = [
    {
      img: imgOne ? imgOne : `pending`,
      heading: nameOne ? nameOne : `pending`,
      para: paraOne ? paraOne : `pending`,
      button: destOne ? destOne : `pending`,
    },
    {
      img: imgTwo ? imgTwo : `pending`,
      heading: nameTwo ? nameTwo : `pending`,
      para: paraTwo ? paraTwo : `pending`,
      button: destTwo ? destTwo : `pending`,
    },
    {
      img: imgThree ? imgThree : `pending`,
      heading: nameThree ? nameThree : `pending`,
      para: paraThree ? paraThree : `pending`,
      button: destThree ? destThree : `pending`,
    },
    {
      img: imgFour ? imgFour : `pending`,
      heading: nameFour ? nameFour : `pending`,
      para: paraFour ? paraFour : `pending`,
      button: destFour ? destFour : `pending`,
    },
    {
      img: imgFive ? imgFive : `pending`,
      heading: nameFive ? nameFive : `pending`,
      para: paraFive ? paraFive : `pending`,
      button: destFive ? destFive : `pending`,
    },
    {
      img: imgSix ? imgSix : `pending`,
      heading: nameSix ? nameSix : `pending`,
      para: paraSix ? paraSix : `pending`,
      button: destSix ? destSix : `pending`,
    },
    {
      img: imgSeven ? imgSeven : `pending`,
      heading: nameSeven ? nameSeven : `pending`,
      para: paraSeven ? paraSeven : `pending`,
      button: destSeven ? destSeven : `pending`,
    },
    {
      img: imgEight ? imgEight : `pending`,
      heading: nameEight ? nameEight : `pending`,
      para: paraEight ? paraEight : `pending`,
      button: destEight ? destEight : `pending`,
    },
    {
      img: imgNine ? imgNine : `pending`,
      heading: nameNine ? nameNine : `pending`,
      para: paraNine ? paraNine : `pending`,
      button: destNine ? destNine : `pending`,
    },
  ];
  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section id="services_page" >
        <div className="container">
          <SectionHeading
            heading={title ? title : `pending`}
            para={description ? description : `pending`}
          />
          <div className="service_wrapper_top">
            <div className="row">
              {ServiceData.map((data, index) => (
                <div className="col-lg-4" key={index}>
                  <ServiceCard
                    img={data.img}
                    heading={data.heading}
                    para={data.para}
                    button={data.button}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCard;
