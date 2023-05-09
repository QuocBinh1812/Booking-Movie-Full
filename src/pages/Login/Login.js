import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";
import "./Login.scss";

export default function Login(props) {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  // console.log('userLogin', userLogin);
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      dispatch(dangNhapAction(values));
      // console.log('values', values);
      // window.location.reload();
    },
  });

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="taiKhoan"
            onChange={formik.handleChange}
            required
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            id="myInput"
            name="matKhau"
            onChange={formik.handleChange}
            required
          />
          <label>Password</label>
        </div>
        <div>
          <p className="text-white">
            Do not have an account ?{" "}
            <NavLink to="/register" className="text-red-600">
              Sigup
            </NavLink>{" "}
          </p>
        </div>
        <button
          type="submit"
          onClick={() => {
            //window.location.reload();
          }}
        >
          <span />
          <span />
          <span />
          <span />
          Login
        </button>
      </form>
    </div>
  );
}
