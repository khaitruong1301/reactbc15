import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import { dangNhapAction } from '../redux/actions/QuanLyNguoiDungActions';
export default function Login(props) {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: ''
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống!'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống !')
        }),
        onSubmit: (values) => {
            const action = dangNhapAction(values)

            dispatch(action);
        }
    })
    return (
        <form className='container' onSubmit={formik.handleSubmit}>
            <h3>Đăng nhập</h3>
            <div className='form-group'>
                <p>Tài khoản</p>
                <input className='form-control' name='taiKhoan' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.taiKhoan && formik.touched.taiKhoan ? (<div className='text-danger'>{formik.errors.taiKhoan}</div>) : null}
            </div>
            <div className='form-group'>
                <p>Mật khẩu</p>
                <input className='form-control' name='matKhau' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.matKhau && formik.touched.matKhau ? (<div className='text-danger'>{formik.errors.matKhau}</div>) : null}
            </div>
            <div className='form-group'>
                <button className='btn btn-success' type="submit" disabled={!formik.isValid}>Đăng nhập</button>
            </div>
        </form>
    )
}
