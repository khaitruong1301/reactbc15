import {combineReducers, createStore} from 'redux';
import { BTQuanLyNguoiDungReducer } from './reducers/BTQuanLyNguoiDungReducer';
import { gameXucXacReducer } from './reducers/gameXucXacReducer';
import { gioHangReducer } from './reducers/gioHangReducer';
import {FaceBookAppReducer} from './reducers/FaceBookAppReducer';
const rootReducer = combineReducers({
    //Nơi chứa toàn bộ state của ứng dụng (Thay vì đặt dưới this.state của component)
    stateGioHang : gioHangReducer,
    gameXucXacReducer,
    BTQuanLyNguoiDungReducer,
    FaceBookAppReducer
    //....stateBaiTap: 

});


export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());