import React, { useState, useEffect } from "react";
import api from "../../../prismicApi";
import Prismic from "prismic-javascript";

// import Section Heading
import SectionHeading from "../../Common/SectionHeading";

const GetSchedule = () => {
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
    return items.data.body[1].items[0].title;
  });
  const description = fetchData?.results?.map((items) => {
    return items.data.body[1].items[0].description;
  });
  const TrackOne = fetchData?.results?.map((items) => {
    return items.data.trackone;
  });
  const TrackTwo = fetchData?.results?.map((items) => {
    return items.data.tracktwo;
  });
  const TrackThree = fetchData?.results?.map((items) => {
    return items.data.trackthree;
  });
  const containersone = fetchData?.results?.map((items) => {
    return items.data.containersone;
  });
  const containertwo = fetchData?.results?.map((items) => {
    return items.data.containertwo;
  });
  const emailone = fetchData?.results?.map((items) => {
    return items.data.emailone;
  });
  const emailtwo = fetchData?.results?.map((items) => {
    return items.data.emailtwo;
  });
  const scheduleone = fetchData?.results?.map((items) => {
    return items.data.scheduleone;
  });

  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section id="schedule_one">
        <div className="container">
          <SectionHeading
            heading={title ? title : `pending`}
            para={description ? description : `pending`}
          />
          <div className="row">
            <div className="col-md-12">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active nav-one"
                    id="shipment-tab"
                    data-toggle="tab"
                    href="#shipment"
                    role="tab"
                    aria-controls="shipment"
                    aria-selected="true"
                  >
                    <svg
                      id="Capa_1"
                      enableBackground="new 0 0 512.061 512.061"
                      viewBox="0 0 512.061 512.061"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="m344.03 512h-167.453c-53.234 0-96.543-43.309-96.543-96.543s43.309-96.544 96.543-96.544h55.664c16.419 0 29.776-13.357 29.776-29.776s-13.357-29.776-29.776-29.776h-58.202v-30h58.202c32.961 0 59.776 26.815 59.776 59.776s-26.815 59.776-59.776 59.776h-55.664c-36.692 0-66.543 29.851-66.543 66.543s29.85 66.544 66.543 66.544h167.453z"
                          fill="#0b799d"
                        />
                        <path
                          d="m100.948 0-20.002 100.919 20.001 142.717 71.359-71.359c18.262-18.262 29.558-43.492 29.558-71.359.001-55.736-45.181-100.918-100.916-100.918z"
                          fill="#e50058"
                        />
                        <path
                          d="m.03 100.917c0 27.867 11.296 53.097 29.558 71.359l71.359 71.359v-243.635c-55.734 0-100.917 45.182-100.917 100.917z"
                          fill="#ff415b"
                        />
                        <path
                          d="m100.948 30-20.001 70.919 20.001 70.919c39.104 0 70.919-31.814 70.919-70.919s-31.815-70.919-70.919-70.919z"
                          fill="#ff415b"
                        />
                        <path
                          d="m30.029 100.919c0 39.105 31.814 70.919 70.919 70.919v-141.838c-39.105 0-70.919 31.814-70.919 70.919z"
                          fill="#ff7c48"
                        />
                        <path
                          d="m141.866 100.919c0-22.563-18.356-40.919-40.918-40.919l-20.001 40.919 20.001 40.919c22.562 0 40.918-18.356 40.918-40.919z"
                          fill="#e1ebf0"
                        />
                        <path
                          d="m60.029 100.919c0 22.563 18.356 40.919 40.919 40.919v-81.838c-22.563 0-40.919 18.356-40.919 40.919z"
                          fill="#fff5f5"
                        />
                        <path
                          d="m432.026 318.913-20.001 96.574 20.001 96.574 56.572-56.571c15.11-15.112 23.432-35.203 23.432-56.572 0-44.115-35.889-80.005-80.004-80.005z"
                          fill="#e50058"
                        />
                        <path
                          d="m352.022 398.917c0 21.37 8.321 41.461 23.431 56.572l56.573 56.571v-193.147c-44.114 0-80.004 35.89-80.004 80.004z"
                          fill="#ff415b"
                        />
                      </g>
                    </svg>
                    <h6> {TrackOne ? TrackOne : `pending`}</h6>
                  </a>
                  <a
                    className="nav-item nav-link nav-two"
                    id="schedule-tab"
                    data-toggle="tab"
                    href="#schedule"
                    role="tab"
                    aria-controls="schedule"
                    aria-selected="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Capa_2"
                      enableBackground="new 0 0 512 512"
                      viewBox="0 0 512 512"
                      data-bubblesppbfhhgcdehhbjigifndnfmcihegokbbprevent-events-conflict-installed="true"
                      data-arp-injected="true"
                    >
                      <g>
                        <g>
                          <path
                            d="m246.23 426.666h-195.039c-18.851 0-34.132-15.282-34.132-34.132v-34.134h261.957z"
                            fill="#d3dcfb"
                          />
                          <path
                            d="m460.825 153.6v143.398 95.534h-409.634c-18.851 0-34.132-15.282-34.132-34.133v-204.799l238.95-85.334z"
                            fill="#ebf5fc"
                          />
                          <g fill="#3c58a0">
                            <path d="m77.336 221.867h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.582 8-8 8z" />
                            <path d="m145.603 221.867h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.582 8-8 8z" />
                            <path d="m213.869 221.867h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.581 8-8 8z" />
                            <path d="m282.136 221.867h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.582 8-8 8z" />
                            <path d="m350.391 221.867h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.581 8-8 8z" />
                            <path d="m418.658 221.867h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.582 8-8 8z" />
                            <path d="m77.336 290.133h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.419-3.582 8-8 8z" />
                            <path d="m145.603 290.133h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.419-3.582 8-8 8z" />
                            <path d="m213.869 290.133h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.419-3.581 8-8 8z" />
                            <path d="m290.136 290.133v-25.6c0-4.713-3.82-8.533-8.533-8.533h-17.067c-4.713 0-8.533 3.82-8.533 8.533v17.067c0 4.713 3.821 8.533 8.533 8.533z" />
                            <path d="m77.336 358.4h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.582 8-8 8z" />
                            <path d="m145.603 358.4h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.582 8-8 8z" />
                            <path d="m213.869 358.4h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.581 8-8 8z" />
                          </g>
                          <path
                            d="m418.417 187.733h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.219 4.178 5.219 7.662v17.65c0 3.484-2.165 6.456-5.219 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.65c-.001-4.552-3.691-8.242-8.242-8.242z"
                            fill="#2a428c"
                          />
                          <path
                            d="m350.15 187.733h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.219 4.178 5.219 7.662v17.65c0 3.484-2.165 6.456-5.219 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.241-3.69 8.241-8.241v-17.65c0-4.552-3.689-8.242-8.241-8.242z"
                            fill="#2a428c"
                          />
                          <path
                            d="m281.895 187.733h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.65c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.65c-.001-4.552-3.691-8.242-8.242-8.242z"
                            fill="#2a428c"
                          />
                          <path
                            d="m213.628 187.733h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.65c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.65c-.001-4.552-3.69-8.242-8.242-8.242z"
                            fill="#2a428c"
                          />
                          <path
                            d="m145.361 187.733h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.219 4.178 5.219 7.662v17.65c0 3.484-2.165 6.456-5.219 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.65c0-4.552-3.69-8.242-8.242-8.242z"
                            fill="#2a428c"
                          />
                          <path
                            d="m77.095 187.733h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.65c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.65c-.001-4.552-3.691-8.242-8.242-8.242z"
                            fill="#2a428c"
                          />
                          <path
                            d="m77.095 256h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.651c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.651c-.001-4.552-3.691-8.242-8.242-8.242z"
                            fill="#2a428c"
                          />
                          <path
                            d="m77.095 324.267h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.651c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.651c-.001-4.553-3.691-8.242-8.242-8.242z"
                            fill="#2a428c"
                          />
                          <path
                            d="m145.361 256h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.219 4.178 5.219 7.662v17.651c0 3.484-2.165 6.456-5.219 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.651c0-4.552-3.69-8.242-8.242-8.242z"
                            fill="#2a428c"
                          />
                          <path
                            d="m145.361 324.267h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.219 4.178 5.219 7.662v17.651c0 3.484-2.165 6.456-5.219 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.651c0-4.553-3.69-8.242-8.242-8.242z"
                            fill="#2a428c"
                          />
                          <path
                            d="m213.628 256h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.651c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.651c-.001-4.552-3.69-8.242-8.242-8.242z"
                            fill="#2a428c"
                          />
                          <path
                            d="m290.136 290.133v-25.892c0-4.552-3.69-8.241-8.242-8.241h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.651c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h25.892z"
                            fill="#2a428c"
                          />
                          <path
                            d="m213.628 324.267h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.651c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.651c-.001-4.553-3.69-8.242-8.242-8.242z"
                            fill="#2a428c"
                          />
                          <path
                            d="m437.114 143.721v153.277 95.535h23.711v-95.535-143.398z"
                            fill="#d3dcfb"
                          />
                          <path
                            d="m460.825 153.6v-85.334c0-18.851-15.282-34.132-34.132-34.132h-375.502c-18.851 0-34.132 15.281-34.132 34.132v85.334z"
                            fill="#ff4155"
                          />
                          <g>
                            <g>
                              <g>
                                <path
                                  d="m124.609 75.993h-22.217c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h22.217c4.268 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z"
                                  fill="#e80054"
                                />
                              </g>
                              <g>
                                <path
                                  d="m179.191 75.993h-22.217c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h22.217c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"
                                  fill="#e80054"
                                />
                              </g>
                              <g>
                                <path
                                  d="m320.887 75.993h-22.218c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h22.218c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"
                                  fill="#e80054"
                                />
                              </g>
                              <g>
                                <path
                                  d="m375.47 75.993h-22.218c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h22.218c4.268 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z"
                                  fill="#e80054"
                                />
                              </g>
                            </g>
                          </g>
                          <path
                            d="m162.125 64c0 11.782-9.551 21.333-21.333 21.333s-21.333-9.551-21.333-21.333v-42.667c-.001-11.782 9.55-21.333 21.332-21.333s21.333 9.551 21.333 21.333v42.667z"
                            fill="#ebf5fc"
                          />
                          <path
                            d="m358.403 64c0 11.782-9.551 21.333-21.333 21.333s-21.334-9.551-21.334-21.333v-42.667c0-11.782 9.551-21.333 21.333-21.333s21.333 9.551 21.333 21.333v42.667z"
                            fill="#ebf5fc"
                          />
                          <path
                            d="m337.069 0c-4.38 0-8.448 1.324-11.836 3.588 5.725 3.826 9.498 10.343 9.498 17.746v42.666c0 7.402-3.773 13.92-9.498 17.746 3.387 2.263 7.456 3.588 11.836 3.588 11.782 0 21.333-9.551 21.333-21.333v-42.668c.001-11.782-9.55-21.333-21.333-21.333z"
                            fill="#d3dcfb"
                          />
                          <path
                            d="m140.791 0c-4.38 0-8.448 1.324-11.836 3.588 5.725 3.826 9.498 10.343 9.498 17.746v42.666c0 7.402-3.773 13.92-9.498 17.746 3.387 2.263 7.456 3.588 11.836 3.588 11.782 0 21.333-9.551 21.333-21.333v-42.668c.001-11.782-9.55-21.333-21.333-21.333z"
                            fill="#d3dcfb"
                          />
                          <path
                            d="m426.693 34.133h-23.703c18.851 0 34.132 15.281 34.132 34.132v85.335h23.702v-85.334c.001-18.851-15.281-34.133-34.131-34.133z"
                            fill="#e80054"
                          />
                          <path
                            d="m17.058 111.74h443.767v15.453h-443.767z"
                            fill="#e80054"
                          />
                        </g>
                        <circle cx="366.942" cy="384" fill="#4fabf7" r="128" />
                        <circle
                          cx="366.942"
                          cy="384"
                          fill="#ebf5fc"
                          r="93.867"
                        />
                        <g>
                          <g>
                            <path
                              d="m366.942 374.659c-4.268 0-7.726-3.459-7.726-7.726v-42.667c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v42.667c0 4.267-3.459 7.726-7.726 7.726z"
                              fill="#3c58a0"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="m409.609 391.726h-25.601c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h25.601c4.268 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z"
                              fill="#3c58a0"
                            />
                          </g>
                        </g>
                        <path
                          d="m366.942 256c-3.995 0-7.945.193-11.847.551 65.137 5.979 116.152 60.752 116.152 127.449s-51.016 121.47-116.153 127.449c3.902.358 7.852.551 11.847.551 70.692 0 128-57.308 128-128s-57.307-128-127.999-128z"
                          fill="#1886ea"
                        />
                        <path
                          d="m366.942 290.133c-4.01 0-7.961.253-11.839.741 46.252 5.821 82.028 45.295 82.028 93.126s-35.776 87.305-82.028 93.126c3.878.488 7.829.741 11.839.741 51.841 0 93.867-42.026 93.867-93.867s-42.026-93.867-93.867-93.867z"
                          fill="#d3dcfb"
                        />
                        <circle
                          cx="366.942"
                          cy="384"
                          fill="#ffdd40"
                          r="17.067"
                        />
                      </g>
                    </svg>
                    <h6>{scheduleone ? scheduleone : `pending`}</h6>
                  </a>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent1">
                <div
                  className="tab-pane fade show active"
                  id="shipment"
                  role="tabpanel"
                  aria-labelledby="shipment-tab"
                >
                  <form action="#!">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="number">
                            {containersone ? containersone : `pending`}
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="email">
                            {emailone ? emailone : `pending`}
                          </label>
                          <input type="text" className="form-control ma-inp" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <button type="submit" className="btn btn-theme">
                            {TrackTwo ? TrackTwo : `pending`}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="schedule"
                  role="tabpanel"
                  aria-labelledby="schedule-tab"
                >
                  <form action="#!">
                    <div className="row">
                      <div className="col-md-4 ">
                        <div className="form-group">
                          <label htmlFor="number">
                            {containertwo ? containertwo : `pending`}
                          </label>
                          <input type="number" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="email">
                            {emailtwo ? emailtwo : `pending`}
                          </label>
                          <input type="text" className="form-control ma-inp" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <button type="submit" className="btn btn-theme">
                            {TrackThree ? TrackThree : `pending`}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetSchedule;
