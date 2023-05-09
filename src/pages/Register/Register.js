import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dangKyAction } from '../../redux/actions/QuanLyNguoiDungAction';
import './Register.scss';

import { history } from '../../App';
import { GROUPID } from '../../util/settings/Config';


export default function Register(props) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            hoTen: '',
            maNhom: GROUPID

        },
       
        onSubmit: values => {
            // dispatch(dangNhapAction(values));
            // console.log('values', values);
            dispatch(dangKyAction(values));
        },
    });


    return (
        <div className="login-box">
            <h2 className="text-2xl">Sigup</h2>
            <form onSubmit={formik.handleSubmit}>

                <div className="user-box">
                    <input type="text" name="hoTen" onChange={formik.handleChange} required />
                    <label>first and last name</label>

                </div>
                <div className="user-box">
                    <input type="text" name="taiKhoan" onChange={formik.handleChange} required />
                    <label>Username</label>

                </div>
                <div className="user-box">
                    <input type="password" name="matKhau" onChange={formik.handleChange} required />
                    <label>Password</label>
                </div>
                <div className="user-box">
                    <input type="text" name="email" onChange={formik.handleChange} required />
                    <label>Email</label>

                </div>
                <div className="user-box">
                    <input type="text" name="soDt" onChange={formik.handleChange} required />
                    <label>Phone number </label>
                </div>

                <div className="flex gap-24">
                    <button type="submit" href="#">
                        <span />
                        <span />
                        <span />
                        <span />
                        Sigup
                    </button>
                    <button onClick={() => {
                        history.push('/home')
                        window.location.reload()
                    }} href="#">
                        <span />
                        <span />
                        <span />
                        <span />
                        Home
                    </button>

                </div>
            </form>
        </div>
    )
}
// "taiKhoan": "string",
//   "matKhau": "string",
//   "email": "string",
//   "soDt": "string",
//   "maNhom": "string",
//   "hoTen": "string"