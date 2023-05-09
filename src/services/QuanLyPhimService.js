import { GROUPID } from "../util/settings/Config";
import { baseService } from "./BaseSevice";

export class QuanLyPhimService extends baseService {
  constructor() {
    super();
  }
  layDanhSachBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  layDanhSachPhim = (tenPhim = "") => {
    console.log("ten phim", tenPhim);
    if (tenPhim.trim() != "") {
      console.log("khac rong");
      return this.get(
        `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`
      );
    }
    console.log("rong");
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };
  themPhimUpLoadHinh = (formData) => {
    return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  };

  layThongTinPhim = (maPhim) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };

  capNhatPhimUpload = (formData) => {
    return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };

  xoaPhim = (maPhim) => {
    return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };
}

export const QLPhimService = new QuanLyPhimService();
