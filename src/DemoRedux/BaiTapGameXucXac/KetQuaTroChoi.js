import React, { Component } from 'react'

export default class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className="container text-center mt-5">
                <div className="display-4">
                    Bạn chọn: <span className="text-danger text-success">TÀI</span>
                </div>
                <div className="display-4">
                    Số bàn thắng: <span className="text-danger text-success">0</span>
                </div>
                <div className="display-4">
                    Tổng số bàn chơi: <span className="text-danger text-success">0</span>
                </div>
            </div>
        )
    }
}
