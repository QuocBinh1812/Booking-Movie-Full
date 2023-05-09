import React, { Component, Fragment, useState } from "react";
import Slider from "react-slick";
import styleSlick from "./MultipleRowSlick.module.css";
import Films from "../Films/Films";
import Film_Flip from "../Films/Film_Flip";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_FILM_ALL,
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../redux/actions/types/QuanLyPhimType";
import { NavLink } from "react-router-dom";
import FsLightbox from "fslightbox-react";
import { PlayCircleOutlined } from "@ant-design/icons";
import "../Films/Film_Flip.css";
import "./Multi.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const MultipleRowSlick = (props) => {
  const [toggler, setToggler] = useState(false);
  const [trailer, setTrailer] = useState();

  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  let activeClassDC = dangChieu === true ? "active_Film" : "none_active_Film";
  let activeClassSC = sapChieu === true ? "none_active_Film" : "active_Film";
  // className={`${styleSlick['width-item']}`}
  const renderFilm = () => {
    return props.arrFilm.slice(0, 12).map((item, index) => {
      return (
        <div key={index}>
          {/* <Film_Flip phim={item} /> */}
          <div className="body1 p-0">
            <div className="flip flip-vertical">
              {/* <div className="front" style={{ background: `url(${item.hinhAnh})  , url(https://picsum.photos/id/1004/500/500)`, backgroundPosition: 'center', backgroundSize: '100%,100%', height: '350px', width: '100%' }}>
                           </div> */}
              <img
                style={{ height: "350px", width: "100%", borderRadius: "10px" }}
                src={item.hinhAnh}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://picsum.photos/id/1004/500/500";
                }}
              />
              <div className="back">
                <h2 className="text-red-600 text-xl">
                  {item.tenPhim.length > 18 ? (
                    <span>{item.tenPhim.slice(0, 18)} ...</span>
                  ) : (
                    <span>{item.tenPhim} </span>
                  )}
                </h2>
                <div className="text-xl" style={{ height: "100px" }}>
                  {item.moTa.length > 100 ? (
                    <span>{item.moTa.slice(0, 100)}... </span>
                  ) : (
                    <span>{item.moTa} </span>
                  )}
                </div>
                <PlayCircleOutlined
                  className="text-center w-full hover:opacity-50"
                  style={{
                    fontSize: "60px",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    console.log(item.trailer);
                    const urlCode = item.trailer.split("=");
                    setToggler(!toggler);
                    setTrailer(urlCode[1]);
                  }}
                ></PlayCircleOutlined>
                <div className="buttons">
                  <button className="pulse w-full mt-16 ">
                    <NavLink
                      className="text-white text-xl text-bold"
                      to={`/detail/${item.maPhim}`}
                    >
                      Book tickets
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="text-white bg-gradient-to-r from-red-600 via-blue-500 to-red-600 w-full py-1 font-medium text-2xl hover:opacity-70">
                <NavLink to={`/detail/${item.maPhim}`} >Đặt vé</NavLink>
            </div> */}
          </div>
        </div>
      );
    });
  };

  const settings1 = {
    className: "center ",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    // speed: 500,
    rows: 2,
    slidesPerRow: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          className: "center ",
          centerMode: true,
          infinite: true,
          centerPadding: "0px",
          slidesToShow: 2,
          // speed: 500,
          rows: 2,
          slidesPerRow: 1,
        },
      },

      {
        breakpoint: 600,
        settings: {
          className: "center ",
          centerMode: true,
          infinite: true,
          centerPadding: "55px",
          slidesToShow: 1,
          // speed: 500,
          rows: 2,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          className: "center ",
          centerMode: true,
          infinite: true,
          centerPadding: "-10px",
          slidesToShow: 1,
          // speed: 500,
          rows: 2,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          className: "center ",
          centerMode: true,
          infinite: true,
          centerPadding: "-20px",
          slidesToShow: 1,
          // speed: 500,
          rows: 1,
          slidesPerRow: 1,
        },
      },
    ],
  };
  return (
    <Fragment>
      <div className="py-8">
        <button
          type="button"
          className={`${styleSlick[activeClassSC]}  px-8 py-3 font-semibold border rounded dark:border-coolGray-200 dark:text-coolGray-300`}
          onClick={() => {
            const action = { type: SET_FILM_ALL };
            dispatch(action);
          }}
        >
          ALL FILM
        </button>
        <button
          type="button"
          className={`${styleSlick[activeClassDC]} mb-3 px-8 py-3 font-semibold border rounded dark:border-coolGray-200 dark:text-coolGray-300 mr-2`}
          onClick={() => {
            const action = { type: SET_FILM_DANG_CHIEU };
            dispatch(action);
          }}
        >
          The movie is playing
        </button>
        <button
          type="button"
          className={`${styleSlick[activeClassSC]}  px-8 py-3 font-semibold border rounded dark:border-coolGray-200 dark:text-coolGray-300`}
          onClick={() => {
            const action = { type: SET_FILM_SAP_CHIEU };
            dispatch(action);
          }}
        >
          Upcoming movie
        </button>
      </div>

      <Slider {...settings1}>{renderFilm()}</Slider>
      <FsLightbox
        toggler={toggler}
        sources={[
          // `${phim.trailer}`
          <iframe
            src={`https://www.youtube.com/embed/${trailer}`}
            width="1920px"
            height="1080px"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />,
        ]}
      />
    </Fragment>
  );
};

export default MultipleRowSlick;
