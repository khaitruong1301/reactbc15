import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '300px',
    textAlign: 'center',
    background: '#364d79',
};

export default function DemoCarousel(props) {
    return (
        <div>
            <Carousel effect="fade">
                <div>
                    {/* <h3 style={contentStyle}>1</h3> */}
                    <img style={contentStyle} src='https://picsum.photos/id/237/1000/300' alt='...' />
                </div>
                <div>
                    <img style={contentStyle} src='https://picsum.photos/id/238/1000/300' alt='...' />

                    {/* <h3 style={contentStyle}>2</h3> */}
                </div>
                <div>
                    <img style={contentStyle} src='https://picsum.photos/id/239/1000/300' alt='...' />

                    {/* <h3 style={contentStyle}>3</h3> */}
                </div>
                <div>
                    <img style={contentStyle} src='https://picsum.photos/id/240/1000/300' alt='...' />

                    {/* <h3 style={contentStyle}>4</h3> */}
                </div>
            </Carousel>
        </div>
    )
}
