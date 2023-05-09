import { GROUPID } from "../util/settings/Config";
import { ThongTinDatVe } from "../_core/models/ThongtinDatVe";
import { baseService } from "./BaseSevice";


export class QuanLyDatVeService extends baseService{
    constructor(){
        super();
    }

    LayChiTietPhongVe =(maLichChieu)=>{//taiKhaon:'', matKhau:''
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,maLichChieu);
    }

    datVe = (thongTinDatVe= new ThongTinDatVe()) =>{//
        return this.post(`/api/QuanLyDatVe/DatVe`,thongTinDatVe);   
        
    }
   
    taoLichChieu = (thongTinLichChieu)=>{
        return this.post(`/api/QuanLyDatVe/TaoLichChieu`,thongTinLichChieu)
    }
}

export const QLDatVeService = new QuanLyDatVeService();