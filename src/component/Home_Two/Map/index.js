import React from "react";
// Import Maps
import Maps from "../../Common/Map";
// Import SectionHeading
import SectionHeading from "../../Common/SectionHeading";

const HomeTwoMap = () => {
  return (
    <>
      <section id="maps_area_common">
        <div className="container">
          <SectionHeading
            heading="Ship Smart with AERONOMI AIRLINES LTD"
            para="Solving your supply chain needs from end to end, taking the
     complexity out of container shipping. We are at the forefront of developing innovation."
          />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="maps-area">
                <Maps />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTwoMap;
