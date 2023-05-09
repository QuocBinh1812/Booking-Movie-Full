import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/styles/Circle.scss";
import { Tabs, Radio, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapAction";
import moment from "moment";
import { Rate } from "antd";

import "./Detail.css";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;
export default function Detail(props) {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);
  console.log("film detail ", { filmDetail });
  const dispatch = useDispatch();
  useEffect(() => {
    //lấy thông tin param từ url
    let { id } = props.match.params;
    console.log("id detailPage ", id);
    dispatch(layThongTinChiTietPhim(id));
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})  , url(https://picsum.photos/id/1004/500/500)`,
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        marginTop: "-22px",
      }}
    >
      <CustomCard
        style={{ minHeight: "100vh", padding: "200px" }}
        effectColor="#C780FF" // required
        color="#00000" // default color is white
        blur={100} // default blur value is 10px
        borderRadius={"0px"} // default border radius value is 10px
      >
        <div className="grid grid-cols-3 gap-4 text-white">
          {/* <div className="" style={{ backgroundImage: `url(${filmDetail.hinhAnh})  , url(https://picsum.photos/id/1004/500/500)`, minHeight: '350px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>

                    </div> */}
          <img
            className="h-96"
            src={filmDetail.hinhAnh}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://picsum.photos/id/1004/500/500";
            }}
          />
          <div style={{ margin: "auto" }}>
            <p className="text-xl">
              Show date :{" "}
              {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
            </p>
            <p className="text-xl ">Movie name : {filmDetail.tenPhim} </p>
            <p className="text-xl">Movie show time : 120 phút</p>
          </div>
          <div className="..." style={{ margin: "auto" }}>
            <div className={`c100 p${filmDetail.danhGia * 10} `}>
              <span>{filmDetail.danhGia * 10}% </span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <div className="  text-2xl leading-3">
              <div>
                <Rate
                  style={{ color: "red" }}
                  allowHalf
                  defaultValue={filmDetail.danhGia / 2}
                />
              </div>
            </div>
            <p className="text-base">
              Number of reviewers : {filmDetail.danhGia}{" "}
            </p>
          </div>
        </div>
        <Tabs className="mt-5 " defaultActiveKey="1" centered>
          <TabPane
            tab={<span style={{ fontSize: "20px" }}>Showtimes</span>}
            key="1"
            style={{ minHeight: "350px", color: "#fff" }}
          >
            <div className="mt-10 container border border-gray-900 px-3 py-5">
              <Tabs tabPosition={"left"}>
                {filmDetail.heThongRapChieu?.map((htr, index) => {
                  return (
                    <TabPane
                      tab={
                        <div className="flex mx-auto items-center">
                          <img
                            src={htr.logo}
                            className="rounded-full"
                            width="50"
                            alt="..."
                          />
                          <div className="text-base ml-2">
                            {htr.tenHeThongRap}
                          </div>
                        </div>
                      }
                      key={index}
                    >
                      {htr.cumRapChieu?.map((cumRap, index) => {
                        return (
                          <div key={index} className="pb-3">
                            <did className="flex">
                              <img
                                src={cumRap.hinhAnh}
                                style={{
                                  width: "60px",
                                  height: "70px",
                                  borderRadius: "5px",
                                }}
                              />
                              <div className="pl-3">
                                <p
                                  className="mb-1 text-red-500 "
                                  style={{
                                    fontWeight: "700",
                                    fontSize: "20px",
                                  }}
                                >
                                  {cumRap.tenCumRap}
                                </p>
                                <p>{cumRap.diaChi}</p>
                              </div>
                            </did>
                            <div className="grid grid-cols-4">
                              {cumRap.lichChieuPhim
                                ?.slice(0, 8)
                                .map((lichChieu, index) => {
                                  return (
                                    <NavLink
                                      to={`/checkout/${lichChieu.maLichChieu}`}
                                      key={index}
                                      className="frame1"
                                    >
                                      <span className="custom-btn1 btn-21">
                                        {" "}
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </span>
                                    </NavLink>
                                  );
                                })}
                            </div>
                          </div>
                        );
                      })}
                    </TabPane>
                  );
                })}
              </Tabs>
            </div>
          </TabPane>
          <TabPane
            className=" text-black mt-10"
            tab={<span style={{ fontSize: "20px" }}>Content</span>}
            key="2"
            style={{ minHeight: "350px", fontSize: "20px" }}
          >
            <div className="grid grid-cols-12 gap-4 text-xl p-3">
              <div className="grid col-span-3">
                <div className="grid grid-cols-1 gap-4">
                  <div className="">Premiere date </div>
                  <div className="">Evaluate </div>
                  <div className="">Movie name</div>
                  <div className="">Category</div>
                  <div className="">Format </div>
                  <div className="">National production</div>
                </div>
              </div>
              <div className="grid col-span-3">
                <div className="grid grid-cols-1 gap-4">
                  <div className="">
                    {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}{" "}
                  </div>
                  <div className="">{filmDetail.danhGia} điểm </div>
                  <div className="">{filmDetail.tenPhim}</div>
                  <div className="">Hành động</div>
                  <div className="">...</div>
                  <div className="">...</div>
                </div>
              </div>
              <div className="grid col-span-6">
                <div>Content</div>
                <div>{filmDetail.moTa} </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </CustomCard>
    </div>
  );
}
