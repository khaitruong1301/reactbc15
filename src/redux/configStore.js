import {applyMiddleware, combineReducers, createStore} from 'redux';
import { BTQuanLyNguoiDungReducer } from './reducers/BTQuanLyNguoiDungReducer';
import { gameXucXacReducer } from './reducers/gameXucXacReducer';
import { gioHangReducer } from './reducers/gioHangReducer';
import {FaceBookAppReducer} from './reducers/FaceBookAppReducer';
import { PhimReducer } from './reducers/PhimReducer';
//add middleware vào redux
import reduxThunk from 'redux-thunk'
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';
const rootReducer = combineReducers({
    //Nơi chứa toàn bộ state của ứng dụng (Thay vì đặt dưới this.state của component)
    stateGioHang : gioHangReducer,
    gameXucXacReducer,
    BTQuanLyNguoiDungReducer,
    FaceBookAppReducer,
    PhimReducer,
    QuanLyNguoiDungReducer
    //....stateBaiTap: 

});
//nextjs, reactjs  
//nestjs, nodejs

export const store = createStore(rootReducer,applyMiddleware(reduxThunk));