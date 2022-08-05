import React, { useState, useEffect } from "react";
// Import ClientLogos
import ClientLogos from "../Testimonial/Client_Logo";
// import Section Heading
import SectionHeading from "../../Common/SectionHeading";
//  OwlCarousel Slider Import
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Prismic from "prismic-javascript";
import api from "../../../prismicApi";

const Testimonials = () => {
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
      items: 2,
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
    return items.data.body[3].items[0].title;
  });
  const description = fetchData?.results?.map((items) => {
    return items.data.body[3].items[0].description;
  });
  const testimonialbg = fetchData?.results?.map((items) => {
    return items?.data?.testimonialbg.url;
  });
  const testimonialbutton = fetchData?.results?.map((items) => {
    return items?.data?.testimonialbutton;
  });

  //   testimonail Slice
  const mikeImage = fetchData?.results?.map((items) => {
    return items.data.body[4].items[0].image.url;
  });
  const nipImage = fetchData?.results?.map((items) => {
    return items.data.body[4].items[1].image.url;
  });
  const pacImage = fetchData?.results?.map((items) => {
    return items.data.body[4].items[2].image.url;
  });
  const LoopImage = fetchData?.results?.map((items) => {
    return items.data.body[4].items[3].image.url;
  });

  const mikepara = fetchData?.results?.map((items) => {
    return items.data.body[4].items[0].para;
  });
  const nippara = fetchData?.results?.map((items) => {
    return items.data.body[4].items[1].para;
  });
  const pacpara = fetchData?.results?.map((items) => {
    return items.data.body[4].items[2].para;
  });
  const Looppara = fetchData?.results?.map((items) => {
    return items.data.body[4].items[3].para;
  });
  // testi slice end
  const TestimonialsData = [
    {
      para: mikepara,
      img: mikeImage,
      name: "David Huxham",
      dest: "Founder, Huxham Inc",
    },
    {
      para: nippara,
      img: nipImage,
      name: "David Huxham",
      dest: "Founder, Huxham Inc",
    },
    {
      para: pacpara,
      img: pacImage,
      name: "David Huxham",
      dest: "Founder, Huxham Inc",
    },
    {
      para: Looppara,
      img: LoopImage,
      name: "David Huxham",
      dest: "Founder, Huxham Inc",
    },
  ];

  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section
        id="client_review_area"
        style={{
          backgroundImage: `url(${testimonialbg ? testimonialbg : `pending`})`,
        }}
      >
        <div className="container">
          <SectionHeading
            heading={title ? title : `pending`}
            para={description ? description : `pending`}
          />
          <div className="row">
            <div className="col-lg-12">
              <div className="client_sliders_wrappers">
                <OwlCarousel
                  className="owl-theme"
                  margin={30}
                  responsive={responsive}
                  autoplay={true}
                  dots={false}
                  nav={true}
                  autoplayHoverPause={true}
                  autoplayTimeout={2500}
                >
                  {TestimonialsData.map((data, index) => (
                    <div className="client_items" key={index}>
                      <i className="fas fa-quote-right fa-3x"></i>
                      <div className="testimonial-box">
                        <span>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </span>
                        <p>{data.para}</p>
                        <div className="client-destination">
                          <div className="client-image">
                            <img
                              style={{
                                borderRadius: "100%",
                                width: "60px",
                                height: "60px",
                              }}
                              src={data.img}
                              alt="Image_Client"
                            />
                          </div>
                          <div className="client-details">
                            <h5>{data.name}</h5>
                            <p>{data.dest}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
              <div className="review_button">
                <a href="#!" className="btn btn-theme">
                  {testimonialbutton ? testimonialbutton : `pending`}
                </a>
              </div>
            </div>
          </div>
        </div>
        <ClientLogos />
      </section>
    </>
  );
};

export default Testimonials;
