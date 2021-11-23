import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableDanhSachNguoiDung extends Component {
    
    render() {
        return (
            <div className="card">
                <div className="card-header bg-dark text-white">
                    <h3>Danh sách người dùng</h3>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tài khoản</th>
                                <th>Mật khẩu</th>
                                <th>Họ tên</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Mã loại người dùng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.mangNguoiDung.map((nguoiDung, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{nguoiDung.taiKhoan}</td>
                                    <td>{nguoiDung.matKhau}</td>
                                    <td>{nguoiDung.hoTen}</td>
                                    <td>{nguoiDung.email}</td>
                                    <td>{nguoiDung.soDienThoai}</td>
                                    <td>{nguoiDung.maLoaiNguoiDung}</td>
                                    <td>
                                        <button className="btn btn-danger">Xoá</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        mangNguoiDung: rootReducer.BTQuanLyNguoiDungReducer.mangNguoiDung
    }
}
export default connect(mapStateToProps)(TableDanhSachNguoiDung)