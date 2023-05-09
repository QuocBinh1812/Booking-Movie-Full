import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { GROUPID, validateMessages } from "../../../../util/settings/Config";
import { themPhimUpLoadHinhAction } from "../../../../redux/actions/QuanLyPhimAction";

const AddNew = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState("");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    onSubmit: (values) => {
      // console.log({values});
      //tạo đối tượng formdata => đưa giá trị values từ formik vào formdata
      values.maNhom = GROUPID;
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
      console.log("formData", formData.get("File"));

      //gọi API gửi các giá trị formdata về backend sủ lý
      dispatch(themPhimUpLoadHinhAction(formData));
    },
  });

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (e) => {
    //lấy file
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      // tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result);
      };

      console.log("file", file);
      //đếm dữ liệu file lưu vào formik
      formik.setFieldValue("hinhAnh", file);
    }
  };

  const handleChangeDatePicker = (value) => {
    // console.log('handleChangeDatePicker',value);
    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  //   const validateMessages = {
  //       required: '${label} không được bỏ trống !',
  //       types: {
  //         email: '${label} is not a valid email!',
  //         number: '${label} phải là số !',
  //       },
  //       number: {
  //         range: '${label} must be between ${min} and ${max}',
  //       },
  //     };

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Form
        onFinish={onFinish}
        validateMessages={validateMessages}
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3 className="text-2xl text-center">Thêm phim mới </h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên Phim" name="tenPhim" rules={[{ required: true }]}>
          <Input name="tenPhim" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Trailer" name="trailer" rules={[{ required: true }]}>
          <Input name="trailer" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Mô tả" name="moTa" rules={[{ required: true }]}>
          <Input name="moTa" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
        </Form.Item>

        <Form.Item label="Đang chiếu">
          <Switch onChange={handleChangeSwitch("dangChieu")} />
        </Form.Item>

        <Form.Item label="Sắp chiếu">
          <Switch onChange={handleChangeSwitch("sapChieu")} />
        </Form.Item>

        <Form.Item label="Hot">
          <Switch onChange={handleChangeSwitch("hot")} />
        </Form.Item>

        <Form.Item
          label="Số sao"
          name="danhGia"
          rules={[{ type: "number", min: 1, max: 10, required: true }]}
        >
          <InputNumber
            name="danhGia"
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={10}
          />
        </Form.Item>

        <Form.Item label="Hình ảnh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/gif"
          />
          <br />
          <img
            style={{ width: "150px", height: "150px" }}
            src={imgSrc}
            alt="..."
          />
        </Form.Item>

        <Form.Item label="Tác vụ">
          <button type="submit" className="btn btn-primary">
            Thêm phim
          </button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AddNew;
