import React, {useEffect} from 'react'

export default function Detail(props) {

    console.log(props.location);
    useEffect(()=>{
        console.log('useEffect callapi lấy chi tiết phim ở đây')
    },[]);

    return (
        <div>
            <h3>Detail page</h3>
            <p>Phim: {props.match.params.maPhim}</p>
        </div>
    )
}
