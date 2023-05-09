import {
  DANG_NHAP_ACTION,
  SET_LAY_TT_NGUOI_DUNG,
  SET_QUAN_LY_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../redux/actions/types/QuanLyNguoiDungType";
import { TOKEN, USER_LOGIN } from "../util/settings/Config";

let user = null;
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  profile: {
    taiKhoan: "",
    matKhau: "",
    hoTen: "default",
    email: "",
    soDT: null,
    maNhom: "",
    loaiNguoiDung: null,
    thongTinDatVe: [],
  },
  thongTinNguoiDung: {},
  quanLyNguoiDung: [],
  layTTNguoiDung: {},
};
export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      state.userLogin = action.userLogin;
      return { ...state };
    }
    case "SET_CHECKOUT": {
      state.profile = action.profile;
      return { ...state };
    }

    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }

    case SET_QUAN_LY_NGUOI_DUNG: {
      state.quanLyNguoiDung = action.quanLyNguoiDung;
      return { ...state };
    }

    case SET_LAY_TT_NGUOI_DUNG: {
      state.layTTNguoiDung = action.layTTNguoiDung;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
