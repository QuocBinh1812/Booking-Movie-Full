import React, { useState, useEffect } from "react";
import "./Header.scss";
import { CSSTransition } from "react-transition-group";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TOKEN, USER_LOGIN } from "../../../../util/settings/Config";
import { Select } from "antd";

const { Option } = Select;

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    console.log("mediaQuery", mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);
    // handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  //ant dropdown

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };
  //đa ngôn ngũ
  const { t, i18n } = useTranslation();
  return (
    <Fragment>
      <header className="Header">
        <img
          src="https://s-media-cache-ak0.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif"
          alt="https://s-media-cache-ak0.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif"
          style={{ width: "200px", height: "65px" }}
        />
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Nav">
            <NavLink to="/home" className="btn btn-2  ">
              {t("Home")}
            </NavLink>
            <NavLink to="/home" className="btn btn-2 ">
              {t("Contact")}
            </NavLink>
            <NavLink to="/news" className="btn btn-2 ">
              {t("News")}
            </NavLink>
            {userLogin ? (
              <Fragment>
                <NavLink to="/checkout/:id" className="text-white btn btn-2">
                  <i className="fa fa-user-secret pr-2 text-2xl"></i>{" "}
                  {userLogin.hoTen}
                </NavLink>

                {userLogin.maLoaiNguoiDung === "QuanTri" ? (
                  <NavLink to="/admin/Films" className="text-white btn btn-2">
                    <i class="fas fa-user-shield pr-2 text-2xl"></i> ADMIN
                  </NavLink>
                ) : (
                  ""
                )}

                <button
                  onClick={() => {
                    //xóa localstore và reload lại trang
                    localStorage.removeItem(USER_LOGIN);
                    localStorage.removeItem(TOKEN);
                    //reload
                    window.location.reload();
                  }}
                  className=" text-white"
                >
                  {t("LogOut")}
                </button>
              </Fragment>
            ) : (
              <NavLink to="/login" className=" text-white">
                <i className="pr-2 text-xl fa fa-user-secret"></i>
                {t("signin")}{" "}
              </NavLink>
            )}
            <Select
              defaultValue="en"
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="en">English</Option>
              <Option value="chi">China</Option>

              <Option value="vi">vietnamese</Option>
            </Select>
          </nav>
        </CSSTransition>
        <button onClick={toggleNav} className="Burger">
          <i className="text-red-600 fa fa-align-justify"></i>
        </button>
      </header>
      {/* phone number                                 */}
      <div>
        <div
          className="phonering-alo-phone phonering-alo-green phonering-alo-show"
          id="phonering-alo-phoneIcon"
          style={{ left: "-50px", bottom: 150, position: "fixed" }}
        >
          <div className="phonering-alo-ph-circle" />
          <div className="phonering-alo-ph-circle-fill" />
          <a href="tel:+840968222555" />
          <div className="phonering-alo-ph-img-circle">
            <a href="tel:+840968222555" />
            <a
              href="tel:+840968222555"
              className="pps-btn-img "
              title="Liên hệ"
            >
              <img
                src="https://i.imgur.com/v8TniL3.png"
                alt="Liên hệ"
                width={50}
                onmouseover="this.src='https://i.imgur.com/v8TniL3.png';"
                onmouseout="this.src='https://i.imgur.com/v8TniL3.png';"
              />
            </a>
          </div>
        </div>
        <a href="tel:+840968222555">
          <span
            style={{
              left: 90,
              bottom: 30,
              position: "fixed",
              backgroundColor: "rgba(51, 51, 51, 0.75)",
              color: "yellow",
              padding: "5px 10px",
              borderRadius: 5,
              fontSize: 20,
              zIndex: 10000,
            }}
          >
            <strong>0968222555</strong>
          </span>
        </a>
      </div>
    </Fragment>
  );
}
