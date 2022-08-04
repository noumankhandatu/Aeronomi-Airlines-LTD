import React from "react";
import CommonBanner from "../component/Common/Banner";
import ContactDetails from "../component/Contact";
import OurPartner from "../component/Common/OurPartner";

const Contact = () => {
  return (
    <>
      <CommonBanner heading="Contact Us" page="Contact Us" />
      <ContactDetails />
      <OurPartner />
    </>
  );
};

export default Contact;
