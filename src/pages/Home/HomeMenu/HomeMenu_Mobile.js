import React, { Component } from "react";
import { Tabs } from "antd";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import Slider from "react-slick";
import "./HomeMenu.css";

const { TabPane } = Tabs;

export default class HomeMenu_Mobile extends Component {
  rederHeThongRap = () => {
    return this.props.heThongRapChieu?.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <img
              src={heThongRap.logo}
              className="rounded-full"
              style={{ width: "50px", borderBottom: "1px solid white" }}
            />
          }
          key={index}
        >
          <Tabs defaultActiveKey="1" centered>
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div style={{ width: "300px", display: "flex" }}>
                      <img
                        src="https://picsum.photos/id/1/200/300"
                        alt="https://picsum.photos/id/1/200/300"
                        width="50"
                      />
                      <br />
                      <div className="text-left ml-2 text-white">
                        {cumRap.tenCumRap.length > 35 ? (
                          <span>{cumRap.tenCumRap.slice(0, 35)} ...</span>
                        ) : (
                          <span>{cumRap.tenCumRap} </span>
                        )}
                        <p className="text-red-400">Details</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="my-4">
                          <div
                            style={{ display: "flex", paddingBottom: "5px" }}
                          >
                            <img
                              style={{
                                width: "70px",
                                height: "40x",
                                borderRadius: "5px",
                              }}
                              src={phim.hinhAnh}
                              alt={phim.hinhAnh}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  "https://picsum.photos/seed/picsum/200/300";
                              }}
                            />

                            <div className="ml-2">
                              <h1 className="text-2xl text-red-500">
                                {phim.tenPhim}{" "}
                              </h1>
                              <p className="text-white">{cumRap.diaChi} </p>
                            </div>
                          </div>
                          {/* load lịch chiếu phim  */}
                          <div className="grid grid-cols-4 gap-6">
                            {phim.lstLichChieuTheoPhim
                              ?.slice(0, 8)
                              .map((lichChieu, index) => {
                                return (
                                  <NavLink
                                    className="frame1"
                                    to={`/checkout/${lichChieu.maLichChieu}`}
                                    key={index}
                                  >
                                    <span
                                      style={{ width: "70px" }}
                                      className="custom-btn1 btn-21"
                                    >
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format("hh:mm ")}
                                    </span>
                                  </NavLink>
                                );
                              })}
                          </div>
                        </div>
                        <hr style={{ backgroundColor: "white" }} />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  render() {
    return (
      <Tabs defaultActiveKey="1" centered>
        {this.rederHeThongRap()}
      </Tabs>
    );
  }
}
