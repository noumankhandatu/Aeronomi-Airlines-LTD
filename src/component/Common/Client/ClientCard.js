import React from "react";
// Import ClientCard Component
const ClientCard = (props) => {
  return (
    <>
      <div className="client_two_item">
        <div className="slider_two_img">
          <img src={props.img ? props.img : `pending`} alt="Client_Img" />
        </div>
        <div className="slider_two_name">
          <h3>{props.name ? props.name : `pending`}</h3>
          <p>{props.des ? props.des : `pending`}</p>
        </div>
        <div className="slider_two_rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <div className="slider_two_text">
          <i className="fas fa-quote-left"></i>
          <p>{props.para ? props.para : `pending`}</p>
        </div>
      </div>
    </>
  );
};

export default ClientCard;
