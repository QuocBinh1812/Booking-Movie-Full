import { history } from "../../App";
import { QLPhimService } from "../../services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "./types/QuanLyPhimType";

export const layDanhSachPhimAction = (tenPhim = "") => {
  return async (dispatch) => {
    try {
      //sử dụng tham số
      const result = await QLPhimService.layDanhSachPhim(tenPhim);

      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrFilm: result.data.content,
      });
    } catch (e) {
      console.log("e", e);
    }
  };
};

export const themPhimUpLoadHinhAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await QLPhimService.themPhimUpLoadHinh(formData);
      alert("Thêm phim thành công ");
      // console.log('result', result);
      history.push("/admin/Films");
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

export const capNhatPhimUploadAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await QLPhimService.capNhatPhimUpload(formData);
      alert("Cập nhật phim thành công ");
      // console.log('result', result);
      dispatch(layDanhSachPhimAction());
      history.push("/admin/Films");
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      //sử dụng tham số
      const result = await QLPhimService.layThongTinPhim(maPhim);
      // console.log(result.data.content);

      dispatch({
        type: SET_THONG_TIN_PHIM,
        thongTinPhim: result.data.content,
      });
    } catch (e) {
      console.log("e", e);
    }
  };
};

export const xoaPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      //sử dụng tham số
      const result = await QLPhimService.xoaPhim(maPhim);
      alert("Xóa phim thành công");
      //sau khi xóa load lại danh sách phim mới
      dispatch(layDanhSachPhimAction());
    } catch (e) {
      console.log({ e });
    }
  };
};
