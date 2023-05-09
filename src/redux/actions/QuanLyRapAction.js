import { QLRapService } from "../../services/QuanLyRapService"
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "./types/QuanLyRapTypes";


export const layDanhSachHeThongRapAction = () => {
    return async (dispatch) => {
        try {
            const result = await QLRapService.layDanhSachHeThongRap();
            console.log('result', result.data.content);
            

            if (result.status === 200) {
                dispatch({
                    type: SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu: result.data.content
                })
            }
            
        } catch (err) {
            console.log('err', err.respone?.data);
        }
    }
}

export const layThongTinChiTietPhim=(id)=>{
    return async dispatch =>{
        try{
            const result = await QLRapService.layThongTinLichChieuPhim(id);
            // console.log('resultLAy', result);
            //lấy được dữ liệu từ api về => reducer
            dispatch({
                type : SET_CHI_TIET_PHIM,
                filmDetail: result.data.content
            })

        }catch (err) {
            console.log('err', err.respone?.data);
        }
    }
}