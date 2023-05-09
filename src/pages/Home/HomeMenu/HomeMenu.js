import "./HomeMenu.css";
import { Tabs } from "antd";
import moment from "moment";
import { Fragment, PureComponent } from "react";
import { NavLink } from "react-router-dom";
const { TabPane } = Tabs;

export default class HomeMenu extends PureComponent {
  state = {
    tabPosition: "left",
  };
  changeTabPosition = (e) => {
    this.setState({ tabPosition: e.target.value });
  };
  rederHeThongRap = () => {
    return this.props.heThongRapChieu?.map((heThongRap, index) => {
      let { tabPosition } = this.state;
      console.log("heThongRapChieu", heThongRap);
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
          <Tabs tabPosition={tabPosition} className="h-menu">
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  className="h-menu overflow-y-auto"
                  tab={
                    <div
                      style={{
                        width: "300px",
                        display: "flex",
                        borderBottom: "1px solid white",
                        paddingBottom: "5px",
                      }}
                    >
                      <img
                        src={cumRap.hinhAnh}
                        alt="https://picsum.photos/id/1/200/300"
                        style={{ width: "60px", height: "80px" }}
                      />
                      <br />
                      <div
                        className="text-left ml-2 "
                        style={{
                          margin: "auto",
                          display: "block",
                          color: "white",
                        }}
                      >
                        {cumRap.tenCumRap.length > 35 ? (
                          <span>{cumRap.tenCumRap.slice(0, 35)} ...</span>
                        ) : (
                          <span>{cumRap.tenCumRap} </span>
                        )}
                        <p className="text-red-400">Details </p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {/* Load phim tương ứng */}
                  {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="my-3">
                          <div
                            style={{ display: "flex", paddingBottom: "5px" }}
                          >
                            <img
                              style={{
                                width: "75px",
                                height: "60x",
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
                          <div className="grid grid-cols-4 gap-0 pr-4">
                            {phim.lstLichChieuTheoPhim
                              ?.slice(0, 8)
                              .map((lichChieu, index) => {
                                
                                return (
                                  <NavLink
                                    className="frame1"
                                    to={`/checkout/${lichChieu.maLichChieu}`}
                                    key={index}
                                  >
                                    <span class="custom-btn1 btn-21">
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
    console.log("props123", this.props);
    const { tabPosition } = this.state;
    return (
      <div style={{ border: "1px solid white" }}>
        <Tabs tabPosition={tabPosition}>{this.rederHeThongRap()}</Tabs>
      </div>
    );
  }
}
