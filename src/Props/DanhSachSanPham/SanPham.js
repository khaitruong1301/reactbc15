import React, { Component } from 'react'

export default class SanPham extends Component {
   
    state = {

    }
   
    render() {

        let sanPham = this.props.sanPham;
        let xemChiTiet = this.props.hamXemChiTiet;
        // let {hamXemChiTiet,sanPham} = this.props;

        return (
            <div className="card">
                <img src={sanPham.hinhAnh} alt="..." height={350} />
                <div className="card-body bg-dark text-white">
                    <p>{sanPham.tenSP}</p>
                    <p>{sanPham.giaBan}</p>
                    <button className="btn btn-success" onClick={()=> {
                        // this.xemChiTiet(sanPham);
                        xemChiTiet(sanPham)
                    }}>Xem chi tiết</button>

                    <button className="btn btn-danger ml-2">Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
