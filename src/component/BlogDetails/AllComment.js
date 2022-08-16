import React, { useState, useEffect } from "react";
import Prismic from "prismic-javascript";
import api from "../../prismicApi";
const AllComment = () => {
  const [toggleFn, setToggleFn] = useState(true);
  const [fetchData, setFetchData] = useState("");
  async function getServerSideProps() {
    const client = Prismic.client(api);
    client
      .query([Prismic.Predicates.at("document.type", "blog")])
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
  const Data = fetchData?.results?.map((items) => {
    return items?.data?.body[8]?.items;
  });

  useEffect(() => {
    getServerSideProps();
  }, []);
  return (
    <>
      <div className="blog_single_item">
        <div className="blog_sidebar_heading">
          <h3>All Comments</h3>
        </div>
        <div className="all_comment_wrappers">
          {/* question */}
          {Data &&
            Data[0]?.map((items, i) => {
              const { image1, person, comment } = items;
              return (
                <>
                  <div className="comment_item">
                    <img
                      src={image1.url ? image1.url : `pending`}
                      alt="Blogger_Img"
                    />
                    <div className="comments_text">
                      <div className="comment_heading_flex">
                        <h5>{person ? person : `pending`} </h5>
                        <a href="#!">
                          <i className="fas fa-share"></i> 
                        </a>
                      </div>
                      <p>{comment ? comment : `pending`}</p>
                    </div>
                  </div>
                </>
              );
            })}

          {/* answer */}
          {/* <div className="comment_item replay_comment">
            <img src={""} alt="Blogger_Img" />
            <div className="comments_text">
              <div className="comment_heading_flex">
                <h5>Suddipta Dor</h5>
                <a href="#!">
                  <i className="fas fa-share"></i> Reply
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vehicula mauris ac facilisis congue. Fusce sem enim,
                rhoncus volutpat condimentum ac.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AllComment;
