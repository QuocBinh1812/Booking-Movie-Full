import { QLDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongtinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import {
  CHUYEN_TAB,
  DAT_VE_HOAN_TAT,
  SET_CHI_TIET_PHONG_VE,
} from "./types/QuanLyDatVeType";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await QLDatVeService.LayChiTietPhongVe(maLichChieu);
      // console.log('result',result);

      if (result.status === 200) {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data.content,
        });
      }
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await QLDatVeService.datVe(thongTinDatVe);
      console.log("result", result.data.content);

      //đặt vé thành công gọi api load lại phòng vé
      await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
      await dispatch({ type: DAT_VE_HOAN_TAT });
      await dispatch(hideLoadingAction);
      dispatch({ type: CHUYEN_TAB });
      //dispatch(hideLoadingAction);
    } catch (e) {
      console.log(e.response?.data);
      dispatch(hideLoadingAction);
    }
  };
};
