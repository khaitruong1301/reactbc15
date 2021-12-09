import axios from 'axios'


//closure function
export const getApiPhimAction = (maNhom = "GP01") => {
    return (dispatch) => {
        //Gọi api .... 
        let promise = axios({
            url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
            method: 'GET'
        })

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
        let promise = axios({
            url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        })

        promise.then(result => {
            dispatch({
                type: 'GET_API_PHIM',
                data: result.data.content
            })

        })

        // dispatch(getApiPhimAction)

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