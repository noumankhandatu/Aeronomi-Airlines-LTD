import React, { useState, useEffect } from "react";
import TeamCard from "../Common/Team/TeamCard";
import Pagination from "../Common/Pagination";
import Prismic from "prismic-javascript";
import api from "../../prismicApi";

const TeamCards = () => {
  const [toggleFn, setToggleFn] = useState(true);
  const [fetchData, setFetchData] = useState("");
  async function getServerSideProps() {
    const client = Prismic.client(api);
    client
      .query([Prismic.Predicates.at("document.type", "team")])
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
  const TeamData = fetchData?.results?.map((items) => {
    return items?.data?.body[1]?.items;
  });

  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section id="team_area">
        <div className="container">
          <div className="row">
            {TeamData &&
              TeamData[0]?.map((data, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                  <TeamCard
                    img={data.img.url}
                    para={data.para}
                    name={data.name}
                    des={data.des}
                  />
                </div>
              ))}

            <div className="col-lg-12 col-md-12">
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamCards;
