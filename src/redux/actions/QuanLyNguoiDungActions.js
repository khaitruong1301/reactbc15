import axios from 'axios';
import { http } from '../../util/setting';
import {history} from '../../App';
export const dangNhapAction = (userLogin) => {
 
    console.log('userLogin',userLogin)

    return async (dispatch) => {

        try {
            let result = await http.post('/api/QuanLyNguoiDung/dangnhap',userLogin);
            //Đưa dữ liệu lên redux
            dispatch({
                type:'DANG_NHAP',
                data: result.data.content
            });
            //Lưu token vào local storage
            localStorage.setItem('userLogin',JSON.stringify(userLogin));
            localStorage.setItem('accessToken',result.data.content.accessToken);
            console.log('result',result.data.content)
            //Chuyển hướng trang sau khi đăng nhạp7 thành công
            history.push('/');

        }catch(err ) {
            console.log('err',err.response?.data);
        }

    }
}


