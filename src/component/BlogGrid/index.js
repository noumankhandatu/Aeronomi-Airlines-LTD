import React, { useState, useEffect } from "react";
import BlogCard from "../Common/Blog/BlogCard";
import Pagination from "../Common/Pagination";
import Prismic from "prismic-javascript";
import api from "../../prismicApi";

const BlogLayout = () => {
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
  // 1
  const imageOne = fetchData?.results?.map((items) => {
    return items.data.body[1].items[0].image.url;
  });
  const headingOne = fetchData?.results?.map((items) => {
    return items.data.body[1].items[0].heading;
  });
  const paraOne = fetchData?.results?.map((items) => {
    return items.data.body[1].items[0].para;
  });
  const nameOne = fetchData?.results?.map((items) => {
    return items.data.body[1].items[0].name;
  });
  const commentOne = fetchData?.results?.map((items) => {
    return items.data.body[1].items[0].comment;
  });
  const dateOne = fetchData?.results?.map((items) => {
    return items.data.body[1].items[0].date;
  });
  const monthOne = fetchData?.results?.map((items) => {
    return items.data.body[1].items[0].month;
  });
  const dayOne = fetchData?.results?.map((items) => {
    return items.data.body[1].items[0].day;
  });
  // 2
  const imageTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].image.url;
  });
  const headingTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].heading;
  });
  const paraTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].para;
  });
  const nameTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].name;
  });
  const commentTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].comment;
  });
  const dateTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].date;
  });
  const monthTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].month;
  });
  const dayTwo = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].day;
  });
  // 3
  const imageThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].image.url;
  });
  const headingThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].heading;
  });
  const paraThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].para;
  });
  const nameThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].name;
  });
  const commentThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].comment;
  });
  const dateThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].date;
  });
  const monthThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].month;
  });
  const dayThree = fetchData?.results?.map((items) => {
    return items.data.body[2].items[1].day;
  });
  // 4
  const imageFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].image.url;
  });
  const headingFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].heading;
  });
  const paraFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].para;
  });
  const nameFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].name;
  });
  const commentFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].comment;
  });
  const dateFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].date;
  });
  const monthFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].month;
  });
  const dayFour = fetchData?.results?.map((items) => {
    return items.data.body[2].items[2].day;
  });
  // 5
  const imageFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].image.url;
  });
  const headingFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].heading;
  });
  const paraFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].para;
  });
  const nameFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].name;
  });
  const commentFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].comment;
  });
  const dateFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].date;
  });
  const monthFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].month;
  });
  const dayFive = fetchData?.results?.map((items) => {
    return items.data.body[2].items[3].day;
  });
  // 6
  const imageSix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].image.url;
  });
  const headingSix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].heading;
  });
  const paraSix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].para;
  });
  const nameSix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].name;
  });
  const commentSix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].comment;
  });
  const dateSix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].date;
  });
  const monthSix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].month;
  });
  const daySix = fetchData?.results?.map((items) => {
    return items.data.body[2].items[4].day;
  });
   // 7
   const imageSeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].image.url;
  });
  const headingSeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].heading;
  });
  const paraSeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].para;
  });
  const nameSeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].name;
  });
  const commentSeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].comment;
  });
  const dateSeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].date;
  });
  const monthSeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].month;
  });
  const daySeven = fetchData?.results?.map((items) => {
    return items.data.body[2].items[5].day;
  });
  const BlogData = [
    {
      img: imageOne ? imageOne : `pending`,
      heading: headingOne ? headingOne : `pending`,
      para: paraOne ? paraOne : `pending`,
      name: nameOne ? nameOne : `pending`,
      comment: commentOne ? commentOne : `pending`,
      date: dateOne ? dateOne : `pending`,
      month: monthOne ? monthOne : `pending`,
      day: dayOne ? dayOne : `pending`,
    },
    {
      img: imageTwo ? imageTwo : `pending`,
      heading: headingTwo ? headingTwo : `pending`,
      para: paraTwo ? paraTwo : `pending`,
      name: nameTwo ? nameTwo : `pending`,
      comment: commentTwo ? commentTwo : `pending`,
      date: dateTwo ? dateTwo : `pending`,
      month: monthTwo ? monthTwo : `pending`,
      day: dayTwo ? dayTwo : `pending`,
    },
    {
      img: imageThree ? imageThree : `pending`,
      heading: headingThree ? headingThree : `pending`,
      para: paraThree ? paraThree : `pending`,
      name: nameThree ? nameThree : `pending`,
      comment: commentThree ? commentThree : `pending`,
      date: dateThree ? dateThree : `pending`,
      month: monthThree ? monthThree : `pending`,
      day: dayThree ? dayThree : `pending`,
    },
    {
      img: imageFour ? imageFour : `pending`,
      heading: headingFour ? headingFour : `pending`,
      para: paraFour ? paraFour : `pending`,
      name: nameFour ? nameFour : `pending`,
      comment: commentFour ? commentFour : `pending`,
      date: dateFour ? dateFour : `pending`,
      month: monthFour ? monthFour : `pending`,
      day: dayFour ? dayFour : `pending`,
    },
    {
      img: imageFive ? imageFive : `pending`,
      heading: headingFive ? headingFive : `pending`,
      para: paraFive ? paraFive : `pending`,
      name: nameFive ? nameFive : `pending`,
      comment: commentFive ? commentFive : `pending`,
      date: dateFive ? dateFive : `pending`,
      month: monthFive ? monthFive : `pending`,
      day: dayFive ? dayFive : `pending`,
    },
    {
      img: imageSix ? imageSix : `pending`,
      heading: headingSix ? headingSix : `pending`,
      para: paraSix ? paraSix : `pending`,
      name: nameSix ? nameSix : `pending`,
      comment: commentSix ? commentSix : `pending`,
      date: dateSix ? dateSix : `pending`,
      month: monthSix ? monthSix : `pending`,
      day: daySix ? daySix : `pending`,
    },
    {
      img: imageSeven ? imageSeven : `pending`,
      heading: headingSeven ? headingSeven : `pending`,
      para: paraSeven ? paraSeven : `pending`,
      name: nameSeven ? nameSeven : `pending`,
      comment: commentSeven ? commentSeven : `pending`,
      date: dateSeven ? dateSeven : `pending`,
      month: monthSeven ? monthSeven : `pending`,
      day: daySeven ? daySeven : `pending`,
    },
  ];

  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section id="blog_area_page">
        <div className="container">
          <div className="row">
            {BlogData?.map((data, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                <BlogCard
                  img={data.img}
                  date={data.date}
                  heading={data.heading}
                  para={data.para}
                  name={data.name}
                  comment={data.comment}
                  month={data.month}
                  day={data.day}
                />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLayout;
