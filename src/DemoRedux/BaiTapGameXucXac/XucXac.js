import React, { Component } from 'react'

export default class XucXac extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 text-center">
                        <div className="mt-5" style={{
                            cursor:'pointer'
                        }}>
                            <span className="text-white display-4 p-5 bg-danger">TÀI</span>
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        <img src="https://picsum.photos/50" width={50} height={50}  alt="..."/>
                        <img src="https://picsum.photos/50" width={50} height={50}  alt="..."/>
                        <img src="https://picsum.photos/50" width={50} height={50}  alt="..."/>
                    </div>
                    <div className="col-4 text-center">
                    <div className="mt-5" style={{
                            cursor:'pointer'
                        }}>
                            <span className="text-white display-4 p-5 bg-danger">XỈU</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
