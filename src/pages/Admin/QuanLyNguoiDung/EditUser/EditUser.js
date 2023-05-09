import React, { Fragment, useEffect } from "react";
import { Form, Input, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { GROUPID } from "../../../../util/settings/Config";
import {
  LayThongTinUser,
  capNhatUserUploadAction,
} from "../../../../redux/actions/QuanLyNguoiDungAction";
export default function EditUser(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { layTTNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  console.log("layThongTinNguoiDung", layTTNguoiDung);
  const dispatch = useDispatch();
  useEffect(() => {
    let { taiKhoan } = props.match.params;
    dispatch(LayThongTinUser(taiKhoan));
  }, []);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: layTTNguoiDung?.taiKhoan,
      matKhau: layTTNguoiDung?.matKhau,
      email: layTTNguoiDung?.email,
      soDt: layTTNguoiDung?.soDt,
      maNhom: GROUPID,
      maLoaiNguoiDung: layTTNguoiDung?.maLoaiNguoiDung,
      hoTen: layTTNguoiDung?.hoTen,
    },
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(capNhatUserUploadAction(values));
    },
  });
  return (
    <Fragment>
      <div className="text-center text-3xl pb-5">Update người dùng </div>
      <Form
        onSubmitCapture={formik.handleSubmit}
        name="basic"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 22,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="row">
          <div className="col-6">
            <Form.Item
              label="Tài khoản"
              rules={[
                {
                  required: true,
                  message: "Tài khoản không được bỏ trống!",
                },
              ]}
            >
              <Input
                name="taiKhoan"
                onChange={formik.handleChange}
                value={formik.values.taiKhoan}
              />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              rules={[
                {
                  required: true,
                  message: "Mật khẩu không được bỏ trống!",
                },
              ]}
            >
              <Input.Password
                name="matKhau"
                onChange={formik.handleChange}
                value={formik.values.matKhau}
              />
            </Form.Item>

            <Form.Item
              label="Họ tên "
              rules={[
                {
                  required: true,
                  message: "Họ tên không được bỏ trống!",
                },
              ]}
            >
              <Input
                name="hoTen"
                onChange={formik.handleChange}
                value={formik.values.hoTen}
              />
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Email không được bỏ trống !",
                },
              ]}
            >
              <Input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Form.Item>

            <Form.Item
              label="SDT"
              rules={[
                {
                  required: true,
                  message: "Số điện thoại không được bỏ trống!",
                },
              ]}
            >
              <Input
                name="soDt"
                onChange={formik.handleChange}
                value={formik.values.soDt}
              />
            </Form.Item>

            <Form.Item
              label="Người dùng"
              rules={[
                {
                  required: true,
                  message: "Mã loại người dùng không được bỏ trống!",
                },
              ]}
            >
              <Select
                placeholder="Chọn mã loại người dùng"
                onChange={formik.handleChange}
                name="maLoaiNguoiDung"
                value={formik.values.maLoaiNguoiDung}
                allowClear
              >
                <Option name="maLoaiNguoiDung" value="KhachHang">
                  Khách hàng
                </Option>
                <Option name="maLoaiNguoiDung" value="QuanTri">
                  Quản trị
                </Option>
              </Select>
            </Form.Item>
          </div>
        </div>

        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 20,
          }}
        >
          <button type="submit" className="btn btn-primary">
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}
