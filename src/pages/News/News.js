import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import "./News.scss";
import { history } from "../../App";
import FsLightbox from "fslightbox-react";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

export default function News(props) {
  const [toggler, setToggler] = useState(false);
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  console.log("arrFilm", arrFilm);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);
  }, []);
  const [trailer, setTrailer] = useState();

  const renderFilm = () => {
    return arrFilm?.slice(0, 24).map((phim, index) => {
      return (
        <div className="wrapper col-12 col-md-4 col-lg-3" key={index}>
          <div className="card">
            <img
              src={phim.hinhAnh}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://picsum.photos/id/1004/200/300";
              }}
            />
            <div className="info w-full">
              <h1 className="text-white text-xl">
                {phim.tenPhim.length > 20 ? (
                  <span>{phim.tenPhim.slice(0, 16)} ...</span>
                ) : (
                  <span>{phim.tenPhim} </span>
                )}{" "}
              </h1>
              <div style={{ height: "100px" }}>
                <p stle={{ height: "100px" }}>
                  {phim?.moTa?.length > 100 ? (
                    <span>{phim.moTa.slice(0, 80)}... </span>
                  ) : (
                    <span>{phim.moTa} </span>
                  )}
                  {/* <span>{phim?.moTa?.slice(0, 80)} </span> */}
                </p>
              </div>

              <PlayCircleOutlined
                className="text-center w-full hover:opacity-50"
                style={{ fontSize: "60px", color: "white", cursor: "pointer" }}
                onClick={() => {
                  const urlCode = phim.trailer.split("=");
                  setToggler(!toggler);
                  setTrailer(urlCode[1]);
                }}
              ></PlayCircleOutlined>
              <button
                className="text-center w-full mt-16"
                onClick={() => {
                  history.push(`/detail/${phim.maPhim}`);
                }}
              >
                Book tickets
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  // search

  const { Search } = Input;
  const onSearch = (value) => {
    //console.log( value);
    //gọi api lấy danh sách phim
    dispatch(layDanhSachPhimAction(value));
  };

  return (
    <Fragment>
      <div className="bg-dark" style={{ marginTop: "-22px" }}>
        <div className="container " style={{ paddingTop: "100px" }}>
          <Space direction="vertical">
            <Search
              placeholder="Movie search"
              enterButton={<i class="fa fa-search"></i>}
              size="large"
              onSearch={onSearch}
            />
          </Space>
          <div className="row">{renderFilm()}</div>
        </div>
      </div>
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
}
