import { GROUPID } from "../util/settings/Config";
import { baseService } from "./BaseSevice";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }

  dangNhap = (thongTinDangNhap) => {
    //taiKhaon:'', matKhau:''
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };

  dangKy = (thongTinNguoiDung) => {
    return this.post("/api/QuanLyNguoiDung/DangKy", thongTinNguoiDung);
  };

  dangKyUser = (themNguoiDung) => {
    return this.post("/api/QuanLyNguoiDung/ThemNguoiDung", themNguoiDung);
  };

  layLichSuDatVe = () => {
    return this.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
  };

  layDanhSachNguoiDung = () => {
    return this.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`
    );
  };

  xoaUser = (taiKhoan) => {
    return this.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  };
  layThongTinUser = (taiKhoan) => {
    return this.get(
      `/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}&tuKhoa=${taiKhoan}`
    );
  };
  capNhatThongTinUser = (User) => {
    return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, User);
  };
}

export const QLNguoiDungService = new QuanLyNguoiDungService();
