import React from "react";
// Import ContactForm Area
import ContactForm from "../Contact/ContactForm";
// Import ContactInfo Area
import ContactInfo from "../Contact/ContactInfo";
// Import ContactMap Area
import ContactMap from "../Contact/ContactMap";

//ContactArea Area
const ContactDetails = () => {
  return (
    <>
      <section id="contact_area_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_heading_center">
                <h2>Contact Info</h2>
              </div>
            </div>
          </div>
          <div className="contact_form_info_area">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact_form_main">
                  <ContactForm />
                </div>
              </div>
              <div className="col-lg-6">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
        <div className="map_area">
          <ContactMap />
        </div>
      </section>
    </>
  );
};

export default ContactDetails;
