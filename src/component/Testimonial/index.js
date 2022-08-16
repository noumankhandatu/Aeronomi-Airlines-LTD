import React, { useState, useEffect } from "react";
//Import ClientCard
import ClientCard from "../Common/Client/ClientCard";
//Import ClientsData
import { ClientsData } from "../Common/Client/ClientData";
//  OwlCarousel Slider Import
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Prismic from "prismic-javascript";
import api from "../../prismicApi";
const TestimonialSlider = () => {
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
      .query([Prismic.Predicates.at("document.type", "testimonials")])
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
  const Data = fetchData?.results?.map((items) => {
    return items?.data?.body[1]?.items;
  });

  useEffect(() => {
    getServerSideProps();
  }, []);
  return (
    <>
      <section id="testimonial_homeTwo">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-12">
              <div className="client_review_two ">
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
                  {Data &&
                    Data[0]?.map((data, index) => (
                      <ClientCard
                        img={data.image.url}
                        para={data.para}
                        name={data.name}
                        des={data.dest}
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

export default TestimonialSlider;
