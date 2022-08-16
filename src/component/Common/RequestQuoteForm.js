import React from "react";
import FormInput from "../Common/FormInput";

const RequestQuoteForm = () => {
  let options1 = [
    {
      text: "Freight Type",
      value: "",
    },
    {
      text: "Type 1",
      value: "",
    },
    {
      text: "Type 2",
      value: "",
    },
    {
      text: "Type 3",
      value: "",
    },
    {
      text: "Type 4",
      value: "",
    },
  ];
  let options2 = [
    {
      text: "Incoterms",
      value: "",
    },
    {
      text: "Type 1",
      value: "",
    },
    {
      text: "Type 2",
      value: "",
    },
    {
      text: "Type 3",
      value: "",
    },
    {
      text: "Type 4",
      value: "",
    },
  ];
  return (
    <>
      <section id="request_quote_form_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12 col-12">
              <form id="request_form">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="heading_quote">
                      <h3>Get a quote</h3>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag="select"
                      classes="form-control"
                      options={options1}
                      label="Freight Type"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag="select"
                      classes="form-control"
                      options={options2}
                      label="Incoterms"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"email"}
                      name={"departure"}
                      classes={"form-control"}
                      placeholder={"City of departure"}
                      label="City of departure"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"text"}
                      name={"city"}
                      classes={"form-control"}
                      placeholder={"Delivery city"}
                      label="Delivery city"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"number"}
                      name={"weight"}
                      classes={"form-control"}
                      placeholder={"Total gross weight (KG)"}
                      label="Total gross weight (KG)"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"text"}
                      name={"dimension"}
                      classes={"form-control"}
                      placeholder={"Dimension"}
                      label="Dimension"
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="heading_quote arae_top">
                      <h3>Your Personal Details</h3>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"text"}
                      name={"fname"}
                      classes={"form-control"}
                      placeholder={"First Name"}
                      label="First Name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"text"}
                      name={"lname"}
                      classes={"form-control"}
                      placeholder={"Last Name"}
                      label="Last Name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"text"}
                      name={"email"}
                      classes={"form-control"}
                      placeholder={"Email"}
                      label="Your Email"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"number"}
                      name={"number"}
                      classes={"form-control"}
                      placeholder={"Phone Nnmber"}
                      label="Phone Nnmber"
                    />
                  </div>
                  <div className="col-lg-12">
                    <FormInput
                      tag={"textarea"}
                      type={"text"}
                      name={"text"}
                      classes={"form-control"}
                      placeholder={"Your Messages"}
                      label="Your Messages"
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="quote_submit_button">
                      <button className="btn btn-theme">Send Messages</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestQuoteForm;
