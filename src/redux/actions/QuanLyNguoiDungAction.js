import axios from "axios";
import { history } from "../../App";
import { QLNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DOMAIN, TOKEN, USER_LOGIN } from "../../util/settings/Config";
import {
  DANG_NHAP_ACTION,
  SET_QUAN_LY_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
  SET_LAY_TT_NGUOI_DUNG,
} from "./types/QuanLyNguoiDungType";

export const getCheckoutAction = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
        },
      });

      //Sau khi có dữ liệu từ api => dispatch lên reducer

      dispatch({
        type: "SET_PROFILE",
        profile: result.data.content,
      });
    } catch (err) {
      console.log({ err });
    }
  };
};

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await QLNguoiDungService.dangNhap(thongTinDangNhap);
      //lưu thông tin đăng nhập người dùng vào localStorage
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
      localStorage.setItem(TOKEN, result.data.content.accessToken);
      console.log("result", result);
      dispatch({
        type: DANG_NHAP_ACTION,
        userLogin: result.data.content,
      });
      //dùng history để chuyển trang tương ứng bên trong component là props.history.push
      alert("Bạn đã đăng nhập thành công ");
      //  history.push('/detail/:id');
      history.goBack();
      // window.location.reload();
    } catch (err) {
      console.log("err", err.response?.data);
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
  };
};
// thông tin người dùng{
//     "taiKhoan": "string",
//     "matKhau": "string",
//     "email": "string",
//     "soDt": "string",
//     "maNhom": "string",
//     "hoTen": "string"
//   }
export const dangKyAction = (thongTinNguoiDung) => {
  return async (dispatch) => {
    try {
      const result = await QLNguoiDungService.dangKy(thongTinNguoiDung);
      //sau khi đăng ký thành công chuyển hướng tranh
      alert("Chúc mừng bạn đã đăng ký tài khoản thành công");
      history.push("/login");
      console.log({ result });
    } catch (e) {
      console.log({ e });
      alert("Tài khoản hoặc email của bạn đã được đăng ký !!");
    }
  };
};

export const dangKyUserAction = (themNguoiDung) => {
  return async (dispatch) => {
    try {
      const result = await QLNguoiDungService.dangKyUser(themNguoiDung);
      //sau khi đăng ký thành công chuyển hướng tranh
      alert("Chúc mừng bạn đã đăng ký tài khoản thành công");

      // console.log({result});
    } catch (e) {
      console.log({ e });
      alert("Tài khoản hoặc email của bạn đã được đăng ký !!");
    }
  };
};

export const LayThongTinNguoiDungAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await QLNguoiDungService.layLichSuDatVe();
      console.log("result", result);
      dispatch({
        type: SET_THONG_TIN_NGUOI_DUNG,
        thongTinNguoiDung: result.data.content,
      });
      //dùng history để chuyển trang tương ứng bên trong component là props.history.push
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};

export const layDanhSachNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      //sử lý tham số
      const result = await QLNguoiDungService.layDanhSachNguoiDung();
      console.log("result: ", result);
      dispatch({
        type: SET_QUAN_LY_NGUOI_DUNG,
        quanLyNguoiDung: result.data.content,
      });
    } catch (err) {
      console.log("err", err);
    }
  };
};

export const xoaUserAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      //sủ dụng tham số
      const result = await QLNguoiDungService.xoaUser(taiKhoan);
      alert("Xóa người dùng thành công ");
      //sau khi xóa load lại danh sách người dùng mới
      dispatch(layDanhSachNguoiDungAction());
    } catch (e) {
      console.log({ e });
    }
  };
};

export const LayThongTinUser = (thongTinUser) => {
  return async (dispatch) => {
    try {
      const result = await QLNguoiDungService.layThongTinUser(thongTinUser);
      console.log("result", result);
      dispatch({
        type: SET_LAY_TT_NGUOI_DUNG,
        layTTNguoiDung: result.data.content[0],
      });
      //dùng history để chuyển trang tương ứng bên trong component là props.history.push
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};
export const capNhatUserUploadAction = (User) => {
  return async (dispatch) => {
    try {
      let result = await QLNguoiDungService.capNhatThongTinUser(User);
      alert("Cập nhật user thành công ");
      // console.log('result', result);
      dispatch(layDanhSachNguoiDungAction());
      history.push("/admin/user");
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
