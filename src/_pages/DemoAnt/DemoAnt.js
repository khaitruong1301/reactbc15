import React from 'react'
import { DatePicker } from 'antd';
import { Button } from 'antd';
import DemoCarousel from '../../components/DemoCarousel/DemoCarousel';

export default function DemoAnt(props) {
    return (
        <div className='container'>
            <h3>Demo ant design ui</h3>'
            <DemoCarousel />
            
            <DatePicker />

            <Button type="primary">Thêm người dùng</Button>


        </div>
    )
}
