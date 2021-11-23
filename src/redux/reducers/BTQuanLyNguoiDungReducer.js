


const stateDefault = {
    mangNguoiDung: [
        {taiKhoan:'nguyenvana',matKhau:'123',hoTen:'Nguyễn văn a',soDienThoai:'09090909',email:'nguyenvana@gmail.com',maLoaiNguoiDung:'KhachHang'},
        {taiKhoan:'nguyenvanb',matKhau:'123',hoTen:'Nguyễn văn b',soDienThoai:'08080808',email:'nguyenvanb@gmail.com',maLoaiNguoiDung:'QuanTri'}
    ]
}


export const BTQuanLyNguoiDungReducer = (state=stateDefault,action)=>{

    switch(action.type) {

        case 'THEM_NGUOI_DUNG':{
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
            return {...state}

            // return {...state,mangNguoiDung:[...state.mangNguoiDung,action.nguoiDung]}
        }

        default: return state;
    }
}