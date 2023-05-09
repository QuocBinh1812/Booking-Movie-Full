import {
  CHUYEN_TAB,
  DAT_VE,
  DAT_VE_HOAN_TAT,
  SET_CHI_TIET_PHONG_VE,
} from "../redux/actions/types/QuanLyDatVeType";
import { ThongTinLichChieu } from "../_core/models/ThongTinPhongVe";

const stateDefault = {
  chiTietPhongVe: new ThongTinLichChieu(),
  danhSachGheDangDat: [
    //{ maGhe: 47420, tenGhe: "20", maRap: 451, loaiGhe: "Thuong", stt: "20" },
  ], //danh sách ghế đang đặt
  tabActive: "1",
  danhSachGheKhachDat: [{ tenGhe: "01" }, { tenGhe: "02" }],
};

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHONG_VE: {
      state.chiTietPhongVe = action.chiTietPhongVe;
      return { ...state };
    }

    case DAT_VE: {
      // console.log(action);
      //cập nhật danh sách ghế đang đặt
      let danhSachGheCapNhap = [...state.danhSachGheDangDat];
      let index = danhSachGheCapNhap.findIndex(
        (gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe
      );
      if (index != -1) {
        //nếu tìm thấy ghế được chọn trong mảng có nghĩa là trước đó đã click vào rồi => xóa đi
        danhSachGheCapNhap.splice(index, 1);
      } else {
        danhSachGheCapNhap.push(action.gheDuocChon);
      }
      return { ...state, danhSachGheDangDat: danhSachGheCapNhap };
    }

    case DAT_VE_HOAN_TAT: {
      state.danhSachGheDangDat = [];
      return { ...state };
    }

    case CHUYEN_TAB: {
      state.tabActive = "2";
      return { ...state };
    }

    case "CHANGE_TAB_ACTIVE": {
      state.tabActive = action.number;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
