import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinPhimLichChieu } from '../redux/actions/PhimActions';

export default function Detail(props) {

    // console.log(props.location);
    const {chiTietPhimLichChieu} = useSelector(rootReducer => rootReducer.PhimReducer);

    console.log('Chi tiết phim',chiTietPhimLichChieu)

    const dispatch = useDispatch();
    useEffect(()=>{
        //Callapi
        let maPhim = props.match.params.maPhim;
        const action = layThongTinPhimLichChieu(maPhim);
        //dispatch gọi api từ reduxthunk
        dispatch(action)
    },[]);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-4">
                    <img src={chiTietPhimLichChieu.hinhAnh} height={300} width={150} alt={chiTietPhimLichChieu.tenPhim} />
                </div>
                <div className="col-4">
                    <h3 className='display-4 text-success'>Tên Phim: {chiTietPhimLichChieu.tenPhim}</h3>
                    <p>{chiTietPhimLichChieu.moTa}</p>
                </div>
            </div>

        </div>
    )
}
