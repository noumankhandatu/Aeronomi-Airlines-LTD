import React, { useState, useEffect } from "react";
// Import Gallery Img
import img1 from "../../assets/img/gallery/gallery-1.jpg";
import img2 from "../../assets/img/gallery/gallery-2.jpg";
import img3 from "../../assets/img/gallery/gallery-3.jpg";
import img4 from "../../assets/img/gallery/gallery-4.jpg";
import img5 from "../../assets/img/gallery/gallery-5.jpg";
import img6 from "../../assets/img/gallery/gallery-6.jpg";
import ReactFancyBox from "react-fancybox";
import Prismic from "prismic-javascript";
import "react-fancybox/lib/fancybox.css";
import api from "../../prismicApi";
// Import ReactFancyBox

const GalleryImages = () => {
  const [toggleFn, setToggleFn] = useState(true);
  const [fetchData, setFetchData] = useState("");
  async function getServerSideProps() {
    const client = Prismic.client(api);
    client
      .query([Prismic.Predicates.at("document.type", "gallery")])
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
  const GalleryData = fetchData?.results?.map((items) => {
    return items?.data?.body[1]?.items;
  });

  console.log(GalleryData, "data is here");
  useEffect(() => {
    getServerSideProps();
  }, []);
  return (
    <>
      <section id="gallery_area">
        <div className="container">
          <div className="row">
            {GalleryData &&
              GalleryData[0]?.map((data, index) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                  <div className="single-gallery">
                    <ReactFancyBox
                      thumbnail={data.img.url}
                      image={data.img.url}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryImages;
