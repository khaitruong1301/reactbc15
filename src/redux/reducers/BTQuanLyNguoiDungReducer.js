import { XOA_NGUOI_DUNG } from "../actions/types/BTQuanLyNguoiDungTypes";



const stateDefault = {
    mangNguoiDung: [
        { taiKhoan: 'nguyenvana', matKhau: '123', hoTen: 'Nguyễn văn a', soDienThoai: '09090909', email: 'nguyenvana@gmail.com', maLoaiNguoiDung: 'KhachHang' },
        { taiKhoan: 'nguyenvanb', matKhau: '123', hoTen: 'Nguyễn văn b', soDienThoai: '08080808', email: 'nguyenvanb@gmail.com', maLoaiNguoiDung: 'QuanTri' }
    ],
    nguoiDungChinhSua: {
        taiKhoan: '',
        matKhau: '',
        hoTen: '',
        soDienThoai: '',
        email: '',
        maLoaiNguoiDung: ''
    }
}
export const BTQuanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case 'THEM_NGUOI_DUNG': {
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
            return { ...state }

            // return {...state,mangNguoiDung:[...state.mangNguoiDung,action.nguoiDung]}
        }
        case XOA_NGUOI_DUNG: {
            state.mangNguoiDung = [...state.mangNguoiDung.filter(nguoiDung => nguoiDung.taiKhoan !== action.taiKhoan)];

            return { ...state };
        }

        case 'CHINH_SUA_NGUOI_DUNG':{
            state.nguoiDungChinhSua = action.nguoiDung;
            
            return {...state}
        }

        case 'CAP_NHAT_NGUOI_DUNG':{

            //Lấy dữ liệu người dùng trong mảng ra 
            let nguoiDung = state.mangNguoiDung.find(nd => nd.taiKhoan === action.nguoiDung.taiKhoan);
            if(nguoiDung) {
                // nguoiDung.hoTen = action.nguoiDung.hoTen;
                for(let key in action.nguoiDung) {
                    nguoiDung[key] = action.nguoiDung[key];
                }
            }
            
            state.mangNguoiDung = [...state.mangNguoiDung];

            return {...state};
        }

        default: return state;
    }
}