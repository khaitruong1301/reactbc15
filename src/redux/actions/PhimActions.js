import axios from 'axios'
import { http, KEY_TOKEN_CYBERSOFT,TOKEN_CYBERSOFT } from '../../util/setting'

//closure function
export const getApiPhimAction = (maNhom = "GP01") => {
    return (dispatch) => {
        //Gọi api .... 
        let promise = http.get(`https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`)
        
        // axios({
        //     url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        //     method: 'GET'
        // })

        promise.then(result => {
            dispatch({
                type: 'GET_API_PHIM',
                data: result.data.content
            })
        })

        // dispatch(getApiNguoiDungAction)

        // dispatch(getApiPhimAction)
    }
}

export const getApiNguoiDungAction = () => {
    return (dispatch) => {
        //Gọi api .... 
        let promise = http.get('https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01')
       

        promise.then(result => {
            dispatch({
                type: 'GET_API_PHIM',
                data: result.data.content
            })

        })

        // dispatch(getApiPhimAction)

    }
}


export const layThongTinPhimLichChieu = (maPhim) => {


    return async (dispatch) => {

        try {
            let result = await http.get(`https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
            

            console.log('result', result);
            //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
            dispatch({
                type:'GET_CHI_TIET_PHIM_LICH_CHIEU',
                data:result.data.content
            })


        } catch (err) {
            console.log('err',err.response?.data);
        }
    }

}









//thư viên dispatch thunk
// function thuVienDispatchThunk (hamDispatch) {

//     //hàm dispatch đưa dữ liệu lên redux
//     var dispatch = {};
//     hamDispatch(dispatch)

// }


// const hamDispatch = (dispatch) => {


//     //abc
// }

// thuVienDispatchThunk(hamDispatch)






// const main = () => {

//     return function(name){

//     }
// }
//  const result = main();
// result('abc')