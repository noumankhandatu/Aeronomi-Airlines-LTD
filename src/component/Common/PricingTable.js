import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Import SectionHeading
import SectionHeading from "./SectionHeading";
import Prismic from "prismic-javascript";
import api from "../../prismicApi";
// Pricing data

const PricingTable = () => {
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
  const titleOne = fetchData?.results?.map((items) => {
    return items.data.body[6].items[0].title;
  });
  const amountOne = fetchData?.results?.map((items) => {
    return items.data.body[6].items[0].amount;
  });

  const iconone = fetchData?.results?.map((items) => {
    return items.data.body[6].items[0].iconone;
  });
  const icontwo = fetchData?.results?.map((items) => {
    return items.data.body[6].items[0].icontwo;
  });
  const iconthree = fetchData?.results?.map((items) => {
    return items.data.body[6].items[0].iconthree;
  });
  const iconfour = fetchData?.results?.map((items) => {
    return items.data.body[6].items[0].iconfour;
  });
  const iconfive = fetchData?.results?.map((items) => {
    return items.data.body[6].items[0].iconfive;
  });
  const featureone = fetchData?.results?.map((items) => {
    return items.data.body[6].items[0].featureone;
  });
  const featuretwo = fetchData?.results?.map((items) => {
    return items.data.body[6].items[0].featuretwo;
  });
  const featurethree = fetchData?.results?.map((items) => {
    return items.data.body[6].items[0].featurethree;
  });
  const featurefour = fetchData?.results?.map((items) => {
    return items.data.body[6].items[0].featurefour;
  });
  const featurefive = fetchData?.results?.map((items) => {
    return items.data.body[6].items[0].featurefive;
  });

  const titleTwo = fetchData?.results?.map((items) => {
    return items.data.body[6].items[1].title;
  });
  const amountTwo = fetchData?.results?.map((items) => {
    return items.data.body[6].items[1].amount;
  });

  const iconones = fetchData?.results?.map((items) => {
    return items.data.body[6].items[1].iconone;
  });
  const icontwos = fetchData?.results?.map((items) => {
    return items.data.body[6].items[1].icontwo;
  });
  const iconthrees = fetchData?.results?.map((items) => {
    return items.data.body[6].items[1].iconthree;
  });
  const iconfours = fetchData?.results?.map((items) => {
    return items.data.body[6].items[1].iconfour;
  });
  const iconfives = fetchData?.results?.map((items) => {
    return items.data.body[6].items[1].iconfive;
  });
  const featureones = fetchData?.results?.map((items) => {
    return items.data.body[6].items[1].featureone;
  });
  const featuretwos = fetchData?.results?.map((items) => {
    return items.data.body[6].items[1].featuretwo;
  });
  const featurethrees = fetchData?.results?.map((items) => {
    return items.data.body[6].items[1].featurethree;
  });
  const featurefours = fetchData?.results?.map((items) => {
    return items.data.body[6].items[1].featurefour;
  });
  const featurefives = fetchData?.results?.map((items) => {
    return items.data.body[6].items[1].featurefive;
  });

  const titleThree = fetchData?.results?.map((items) => {
    return items.data.body[6].items[2].title;
  });
  const amountThree = fetchData?.results?.map((items) => {
    return items.data.body[6].items[2].amount;
  });

  const icononest = fetchData?.results?.map((items) => {
    return items.data.body[6].items[2].iconone;
  });
  const icontwost = fetchData?.results?.map((items) => {
    return items.data.body[6].items[2].icontwo;
  });
  const iconthreest = fetchData?.results?.map((items) => {
    return items.data.body[6].items[2].iconthree;
  });
  const iconfourst = fetchData?.results?.map((items) => {
    return items.data.body[6].items[2].iconfour;
  });
  const iconfivest = fetchData?.results?.map((items) => {
    return items.data.body[6].items[2].iconfive;
  });
  const featureonest = fetchData?.results?.map((items) => {
    return items.data.body[6].items[2].featureone;
  });
  const featuretwost = fetchData?.results?.map((items) => {
    return items.data.body[6].items[2].featuretwo;
  });
  const featurethreest = fetchData?.results?.map((items) => {
    return items.data.body[6].items[2].featurethree;
  });
  const featurefourst = fetchData?.results?.map((items) => {
    return items.data.body[6].items[2].featurefour;
  });
  const featurefivest = fetchData?.results?.map((items) => {
    return items.data.body[6].items[2].featurefive;
  });
  const buttonText = fetchData?.results?.map((items) => {
    return items.data.body[6].items[2].buttontext;
  });
  const perMonth = fetchData?.results?.map((items) => {
    return items.data.body[6].items[2].permonth;
  });
  const pricingData = [
    {
      title: titleOne ? titleOne : `pending`,
      amount: amountOne ? amountOne : `pending`,
      items: [
        { icons: iconone, text: featureone },
        { icons: icontwo, text: featuretwo },
        { icons: iconthree, text: featurethree },
        { icons: iconfour, text: featurefour },
        { icons: iconfive, text: featurefive },
      ],
    },
    {
      title: titleTwo ? titleTwo : `pending`,
      amount: amountTwo ? amountTwo : `pending`,
      items: [
        { icons: iconones, text: featureones },
        { icons: icontwos, text: featuretwos },
        { icons: iconthrees, text: featurethrees },
        { icons: iconfours, text: featurefours },
        { icons: iconfives, text: featurefives },
      ],
    },
    {
      title: titleThree ? titleThree : `pending`,
      amount: amountThree ? amountThree : `pending`,
      items: [
        { icons: icononest, text: featureonest },
        { icons: icontwost, text: featuretwost },
        { icons: iconthreest, text: featurethreest },
        { icons: iconfourst, text: featurefourst },
        { icons: iconfivest, text: featurefivest },
      ],
    },
  ];

  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section id="home_pricing_area">
        <div className="container">
          <SectionHeading
            heading="Our Pricing Plan"
            para="Solving your supply chain needs from end to end, taking the
        complexity out of container shipping. We are at the forefront of developing innovation."
          />
          <div class="row">
            {pricingData.map((data, index) => (
              <div class="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div class="price-table mrb-30 text-center">
                  <div class="table-header">
                    <h4 class="pricing-plan-name">{data.title}</h4>
                    <h3 class="price">
                      <span class="price-currency">$</span>
                      {data.amount}
                      <span class="price-duration text-primary-color">
                        {perMonth ? perMonth : `pending`}
                      </span>
                    </h3>
                  </div>
                  <div class="table-content">
                    <ul class="list-items">
                      {data.items.map((datas, index) => (
                        <li key={index}>
                          <i class={datas.icons}></i>
                          {datas.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div class="table-footer">
                    <Link to="/pricing" class="btn btn-theme">
                      {buttonText ? buttonText : `pending`}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingTable;
