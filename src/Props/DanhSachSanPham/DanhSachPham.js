import React, { Component } from 'react'
import GioHang from './GioHang';
import SanPham from './SanPham';

export default class DanhSachPham extends Component {

    mangDienThoai = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        {
            "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB"
            , "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg"
        },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ];

    state = {
        sanPhamChiTiet : {
            "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB"
            , "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg"
        },
        gioHang: [
            {maSP:2,tenSP:"Meizu 16Xs", hinhAnh:"./img/meizuphone.jpg",giaBan:7600000,soLuong:1}
        ]
        
    }


    renderSanPham = () => {
        return this.mangDienThoai.map((sp,index)=>{
            return <div className="col-4" key={index}>

            <SanPham sanPham={sp} hamXemChiTiet={this.xemChiTiet} />
            {/* <div className="card">
                <img src={sanPham.hinhAnh} alt="..." height={350} />
                <div className="card-body bg-dark text-white">
                    <p>{sanPham.tenSP}</p>
                    <p>{sanPham.giaBan}</p>
                    <button className="btn btn-success" onClick={()=> {
                        this.xemChiTiet(sanPham);
                    }}>Xem chi tiết</button>
                </div>
            </div> */}
        </div>
        })
    }
    xemChiTiet = (sanPhamClick) =>{
        //Xử lý thay đổi state : Lấy sản phẩm click thay thế cho sanPhamChiTiet ban đầu
        // this.state.sanPhamChiTiet = sanPhamClick;
        this.setState({
            sanPhamChiTiet : sanPhamClick
        })

    }


    render() {
        let {maSP,tenSP,manHinh,heDieuHanh,cameraSau,cameraTruoc,ram,rom,hinhAnh} = this.state.sanPhamChiTiet;
        // let {sanPhamChiTiet} = this.state;
        // let {sanPhamChiTiet} = this.state;
        // this.state.sanPhamChiTiet
        // this.state.sanPhamChiTiet
        // this.state.sanPhamChiTiet
        return (
            <div className="container">

                <div className="text-right">
                    <span style={{cursor:'pointer',color:'red',fontWeight:'bold'}}>
                        Giỏ hàng (0)
                    </span>
                </div>
                <div>
                    <GioHang gioHang={this.state.gioHang} />
                </div>


                <h3 className="text-center display-4">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row mt-5">
                    <div className="col-4">
                        <h3>{tenSP}</h3>
                        <img src={this.state.sanPhamChiTiet.hinhAnh} alt="..." className="w-100" />
                    </div>
                    <div className="col-8">
                        <h3>Thông số kỹ thuật</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <td>{manHinh}</td>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <td>{heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <td>{cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <td>{cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <td>{rom}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
