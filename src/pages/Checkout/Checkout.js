import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  datVeAction,
  layChiTietPhongVeAction,
} from "../../redux/actions/QuanLyDatVeAction";
import styles from "./Checkout.module.css";
import "./Checkout.css";

import { DAT_VE } from "../../redux/actions/types/QuanLyDatVeType";
import _ from "lodash";
import { ThongTinDatVe } from "../../_core/models/ThongtinDatVe";
import { Tabs } from "antd";
import { LayThongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";
import moment from "moment";
import { history } from "../../App";

function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDat } =
    useSelector((state) => state.QuanLyDatVeReducer);
  // console.log({chiTietPhongVe});

  const dispatch = useDispatch();
  useEffect(() => {
    //gọi hàm tạo ra 1 async function
    const action = layChiTietPhongVeAction(props.match.params.id);
    //dispatch function này
    dispatch(action);
  });
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  console.log("chi tiet phong ve ", chiTietPhongVe);
  console.log("danh sach ghe dang dat ", danhSachGheDangDat);
  console.log("danh sach ghe khach dat ", danhSachGheKhachDat);
  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";
      //kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );

      //kiểm tra từng render xem có phải ghế khách đặt hay không
      let classGheKhachDat = "";
      let indexGheKD = danhSachGheKhachDat.findIndex(
        (gheKD) => gheKD.tenGhe === ghe.tenGhe
      );
      if (indexGheKD !== -1) {
        classGheKhachDat = "gheKhachDat";
      }

      if (indexGheDD != -1) {
        classGheDangDat = "gheDangDat";
      }

      //ghe minh dat dat va thanh toan
      let classGheDaDuocDat = "";
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              //  window.location.reload();
              dispatch({
                type: DAT_VE,
                gheDuocChon: ghe,
              });
            }}
            disabled={ghe.daDat || classGheKhachDat !== ""}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} ${classGheKhachDat} text-center `}
            key={index}
          >
            {ghe.daDat ? (
              classGheDaDuocDat != "" ? (
                <i
                  className="fa fa-user-ninja"
                  style={{ fontSize: "18px" }}
                ></i>
              ) : (
                <i className="fa fa-times"></i>
              )
            ) : classGheKhachDat !== "" ? (
              <i class="fa fa-user-slash"></i>
            ) : (
              ghe.stt
            )}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ minHeight: "100vh" }}>
        <div className=" row ">
          <div className="col-12 col-lg-9  ">
            <div
              className="mt-4 bg-green-600 "
              style={{ width: "90%", margin: "auto" }}
            >
              <div className={`${styles["thangNgang"]}`}></div>
            </div>
            <div className="" style={{ width: "80%", margin: "auto" }}>
              <div className={`${styles["trapezoid"]}`}>
                <h3
                  className="text-white text-center"
                  style={{ fontSize: "20px", marginBottom: "-24px" }}
                >
                  Màn hình{" "}
                </h3>
              </div>
            </div>
            <div className="text-center">{renderSeats()}</div>
            <div className="mt-2 mb-3 text-base flex justify-center">
              <table className="divide-y dicide-gray-200 w-11/12">
                <thead className="bg-gray-500">
                  <tr>
                    <th>Ghế chưa đặt</th>
                    <th>Ghế đang đặt</th>
                    <th>Ghế Vip</th>
                    <th>Ghế đã đặt </th>
                    <th>Ghế bạn đặt </th>
                    <th>Ghế khách đang đặt </th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <th>
                      <button className="ghe text-center">00</button>
                    </th>
                    <th>
                      <button className="ghe gheDangDat text-center">
                        <i className="fa fa-check"></i>
                      </button>
                    </th>
                    <th>
                      <button className="ghe gheVip text-center">
                        <i className="fa fa-check"></i>
                      </button>
                    </th>
                    <th>
                      <button className="ghe gheDaDat text-center">
                        <i className="fa fa-check"></i>
                      </button>
                    </th>
                    <th>
                      <button className="ghe gheDaDuocDat text-center ">
                        <i className="fa fa-check text-white"></i>
                      </button>
                    </th>
                    <th>
                      <button className="ghe gheKhachDat text-center">
                        <i className="fa fa-check"></i>
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-lg-3  text-white mt-4">
            {/* <h3 className="text-center text-2xl text-green-600">0 đ</h3> */}

            <h3 className="text-xl text-white">
              Movie's name : {thongTinPhim.tenPhim}
            </h3>
            <p>
              Location : {thongTinPhim.tenCumRap} - {thongTinPhim.diaChi}{" "}
            </p>
            <p>
              Show date : {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} -{" "}
              {thongTinPhim.tenRap}{" "}
            </p>
            <hr />
            <div className=" flex-row ">
              <div className="w-full">
                <span className="text-xl text-red-600 pr-2">
                  selected chair :{" "}
                </span>
                <div className="table">
                  <thead>
                    {_.sortBy(danhSachGheDangDat, ["stt"]).map(
                      (gheDD, index) => {
                        return (
                          <tr key={index} className="text-white text-lg pr-2 ">
                            <td>Seats : {gheDD.tenGhe} </td>
                            <td className="">{gheDD.giaVe} $ </td>
                          </tr>
                        );
                      }
                    )}
                  </thead>
                </div>
              </div>
              <div className="text-right col-span-1">
                <span className=" text-xl text-red-600">
                  total payment : &nbsp;
                  {danhSachGheDangDat
                    .reduce((tongTien, ghe, index) => {
                      return (tongTien += ghe.giaVe);
                    }, 0)
                    .toLocaleString()}{" "}
                  $
                </span>
              </div>
            </div>
            <hr />
            <div className="my-1 text-lg">
              <i>Hello </i>
              {userLogin?.hoTen}
            </div>
            <hr />
            <div className="my-1 text-lg">
              <i>Email : </i>
              {userLogin.email}
            </div>

            <div
              className="mb-0 flex flex-col  items-center"
              style={{ marginBottom: "0" }}
            >
              <div
                className="bg-green-600 w-full text-white text-xl text-center py-2 font-bold cursor-pointer"
                onClick={() => {
                  const thongTinDatVe = new ThongTinDatVe();
                  thongTinDatVe.maLichChieu = props.match.params.id;
                  thongTinDatVe.danhSachVe = danhSachGheDangDat;
                  console.log(thongTinDatVe);
                  dispatch(datVeAction(thongTinDatVe));
                }}
              >
                Book tickets
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function KetQuaDatVe(props) {
  const dispatch = useDispatch();
  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  useEffect(() => {
    dispatch(LayThongTinNguoiDungAction());
  }, []);
  // console.log('thongTinNguoiDung',thongTinNguoiDung);

  const renderTicketItem = function () {
    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full text-white" key={index}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://picsum.photos/id/1042/100/100";
              }}
              src={ticket.hinhAnh}
            />
            <div className="flex-grow">
              <h2 className="text-red-600 text-xl title-font font-medium">
                {ticket.tenPhim}{" "}
              </h2>
              <p className="text-white">
                {moment(ticket.ngayDat).format("hh:mm A")} - Projection date{" "}
                {moment(ticket.ngayDat).format("DD-MM-YYYY")}{" "}
              </p>
              <p>Location {seats.tenHeThongRap} </p>
              <p>
                theater name : {seats.tenCumRap} - Seats{" "}
                {ticket.danhSachGhe.map((ghe, index) => {
                  return <span key={index}>{ghe.tenGhe} </span>;
                })}{" "}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Customer booking history
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            Please see the address and time information to watch the movie
            happily !
          </p>
          <div
            className="text-red-600 text-lg cursor-pointer"
            onClick={() => {
              history.push("/home");
            }}
          >
            Home
          </div>
        </div>
        <div className="flex flex-wrap -m-2">{renderTicketItem()}</div>
      </div>
    </div>
  );
}

const { TabPane } = Tabs;

export default function (props) {
  const { tabActive } = useSelector((state) => state.QuanLyDatVeReducer);

  const dispatch = useDispatch();
  // console.log({tabActive});

  return (
    <div className={`${styles["backGround"]}`} style={{ padding: "10px" }}>
      <Tabs
        className="text-white"
        defaultActiveKey="1"
        activeKey={tabActive}
        onChange={(key) => {
          dispatch({
            type: "CHANGE_TAB_ACTIVE",
            number: key.toString(),
          });
        }}
      >
        <TabPane tab="01 Select seat & pay" key="1">
          <Checkout {...props} />
        </TabPane>
        <TabPane tab="02 ticket booking results " key="2">
          <KetQuaDatVe {...props} />
        </TabPane>
      </Tabs>
    </div>
  );
}
