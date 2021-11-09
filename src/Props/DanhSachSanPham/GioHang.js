import React, { Component } from 'react'

export default class GioHang extends Component {

    // state = {
    //     gioHang:[]
    // }



    render() {

        let { gioHang } = this.props;

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá bán</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {gioHang.map((spGH, index) => {
                        return <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td><img src={spGH.hinhAnh} width={50} alt="..." /></td>
                            <td>{spGH.tenSP}</td>
                            <td>{spGH.giaBan}</td>
                            <td>{spGH.soLuong}</td>
                            <td>{spGH.soLuong * spGH.giaBan}</td>
                            <td>
                                <button className="btn btn-danger">Xoá</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}
