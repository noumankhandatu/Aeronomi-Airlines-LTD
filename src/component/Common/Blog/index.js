import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import SectionHeading from "../../Common/SectionHeading";
import Prismic from "prismic-javascript";
import api from "../../../prismicApi";

const BlogHome = () => {
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
  const title = fetchData?.results?.map((items) => {
    return items.data.body[8].items[0].title;
  });

  const description = fetchData?.results?.map((items) => {
    return items.data.body[8].items[0].description;
  });

  const blogimage = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogimage.url;
  });

  const blogheading = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogheading;
  });

  const blogpara = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogpara;
  });

  const blogname = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogname;
  });
  const blogcomment = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogcomment;
  });

  const blogdate = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogdate;
  });
  const blogmonth = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogmonth;
  });
  const blogday = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogday;
  });

  const blogimages = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogimage.url;
  });

  const blogheadings = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogheading;
  });

  const blogparas = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogpara;
  });

  const blognames = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogname;
  });
  const blogcomments = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogcomment;
  });

  const blogdates = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogdate;
  });
  const blogmonths = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogmonth;
  });
  const blogdays = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogday;
  });

  const blogimaget = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogimage.url;
  });

  const blogheadingt = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogheading;
  });

  const blogparat = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogpara;
  });

  const blognamet = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogname;
  });
  const blogcommentt = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogcomment;
  });

  const blogdatet = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogdate;
  });
  const blogmontht = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogmonth;
  });
  const blogdaytt = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogday;
  });

  useEffect(() => {
    getServerSideProps();
  }, []);

  const BlogData = [
    {
      img: blogimage ? blogimage : `pending`,
      heading: blogheading ? blogheading : `pending`,
      para: blogpara ? blogpara : `pending`,
      name: blogname ? blogname : `pending`,
      comment: blogcomment ? blogcomment : `pending`,
      date: blogdate ? blogdate : `pending`,
      month: blogmonth ? blogmonth : `pending`,
      day: blogday ? blogday : `pending`,
    },
    {
      img: blogimages ? blogimages : `pending`,
      heading: blogheadings ? blogheadings : `pending`,
      para: blogparas ? blogparas : `pending`,
      name: blognames ? blognames : `pending`,
      comment: blogcomments ? blogcomments : `pending`,
      date: blogdates ? blogdates : `pending`,
      month: blogmonths ? blogmonths : `pending`,
      day: blogdays ? blogdays : `pending`,
    },
    {
      img: blogimaget ? blogimaget : `pending`,
      heading: blogheadingt ? blogheadingt : `pending`,
      para: blogparat ? blogparat : `pending`,
      name: blognamet ? blognamet : `pending`,
      comment: blogcommentt ? blogcommentt : `pending`,
      date: blogdatet ? blogdatet : `pending`,
      month: blogmontht ? blogmontht : `pending`,
      day: blogdaytt ? blogdaytt : `pending`,
    },
  ];
  return (
    <>
      <section id="news_blog_area">
        <div className="container">
          <SectionHeading
            heading={title ? title : `pending`}
            para={description ? description : `pending`}
          />
          <div className="row">
            {BlogData.slice(0, 3).map((data, index) => (
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
        </div>
      </section>
    </>
  );
};

export default BlogHome;
