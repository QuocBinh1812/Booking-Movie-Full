import React, { Fragment } from "react";
import { Form, Input, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { dangKyUserAction } from "../../../../redux/actions/QuanLyNguoiDungAction";
import { GROUPID } from "../../../../util/settings/Config";

export default function AddUser(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: GROUPID,
      maLoaiNguoiDung: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(dangKyUserAction(values));
    },
  });

  return (
    <Fragment>
      <div className="text-center text-3xl pb-5">Thêm người dùng </div>
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
        autoComplete="off"
      >
        <div className="row">
          <div className="col-6">
            <Form.Item
              label="Tài khoản"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Tài khoản không được bỏ trống!",
                },
              ]}
            >
              <Input onChange={formik.handleChange} name="taiKhoan" />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Mật khẩu không được bỏ trống!",
                },
              ]}
            >
              <Input.Password onChange={formik.handleChange} name="matKhau" />
            </Form.Item>

            <Form.Item
              label="Họ tên "
              name="hoTen"
              rules={[
                {
                  required: true,
                  message: "Họ tên không được bỏ trống!",
                },
              ]}
            >
              <Input onChange={formik.handleChange} name="hoTen" />
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email không được bỏ trống !",
                },
              ]}
            >
              <Input onChange={formik.handleChange} name="email" />
            </Form.Item>

            <Form.Item
              label="SDT"
              name="soDt"
              rules={[
                {
                  required: true,
                  message: "Số điện thoại không được bỏ trống!",
                },
              ]}
            >
              <Input onChange={formik.handleChange} name="soDt" />
            </Form.Item>

            <Form.Item
              name="maLoaiNguoiDung"
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
            Thêm người dùng
          </button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}
