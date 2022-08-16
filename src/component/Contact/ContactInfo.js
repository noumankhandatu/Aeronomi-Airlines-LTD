import React, { useState, useEffect } from "react";
import api from "../../prismicApi";
import Prismic from "prismic-javascript";

const ContactInfo = () => {
  const [toggleFn, setToggleFn] = useState(true);
  const [fetchData, setFetchData] = useState("");
  async function getServerSideProps() {
    const client = Prismic.client(api);
    client
      .query([Prismic.Predicates.at("document.type", "contact")])
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
  const labeladdress = fetchData?.results?.map((items) => {
    return items.data.labeladdress;
  });
  const address = fetchData?.results?.map((items) => {
    return items.data.address;
  });
  const call = fetchData?.results?.map((items) => {
    return items.data.call;
  });
  const phonenumber = fetchData?.results?.map((items) => {
    return items.data.phonenumber;
  });
  const customercare = fetchData?.results?.map((items) => {
    return items.data.customercare;
  });
  const mail = fetchData?.results?.map((items) => {
    return items.data.mail;
  });
  const mailcom = fetchData?.results?.map((items) => {
    return items.data.mailcom;
  });
  const yahoo = fetchData?.results?.map((items) => {
    return items.data.yahoo;
  });

  useEffect(() => {
    getServerSideProps();
  }, []);
  return (
    <>
      <div className="contact_info_wrapper">
        <div className="contact_item">
          <h5>{labeladdress ? labeladdress : `pending`}</h5>
          <p>{address ? address : `pending`}</p>
        </div>
        <div className="contact_item">
          <h5>{call ? call : `pending`}</h5>
          <p>{phonenumber ? phonenumber : `pending`}</p>
          <p>{customercare ? customercare : `pending`}</p>
        </div>
        <div className="contact_item">
          <h5>{mail ? mail : `pending`}</h5>
          <p>{mailcom ? mailcom : `pending`}</p>
          <p>{yahoo ? yahoo : `pending`}</p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
