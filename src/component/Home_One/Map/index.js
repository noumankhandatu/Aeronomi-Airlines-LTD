import React from "react";
// Import Map
import Maps from "../../Common/Map";

const MapArea = () => {
  return (
    <>
      <section id="maps_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="heading-left-border">
                <h2>Ship Smart with AERONOMI AIRLINES LTD</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="maps-right-side-text">
                <p>
                  Solving your supply chain needs from end to end, taking the
                  complexity out of container shipping. We are at the forefront
                  of developing innovative supply chain solutions.
                </p>
              </div>
            </div>
          </div>
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

export default MapArea;
