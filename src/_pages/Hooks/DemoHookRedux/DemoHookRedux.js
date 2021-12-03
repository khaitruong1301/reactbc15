import React, { useState } from 'react'
import { connect, useSelector,useDispatch } from 'react-redux';

export default function DemoHookRedux(props) {

    const [state,setState] = useState({
        name:'',
        content:''
    })

    //useSelector tương tự hàm mapstatetoprops dùng để lấy giá trị từ redux về
    let { arrContent } = useSelector(rootReducer => rootReducer.FaceBookAppReducer);
    //useDispatch thay thế cho props.dispatch của hàm connect
    const dispatch = useDispatch();
    const sendComment = () => {
        
        const action = {
            type:'ADD_COMMENT',
            comment: state
        }
        //Đưa dữ liệu lên redux
        dispatch(action);
    }

    const handleChangeInput = (event) => {
        let {name,value} = event.target;
        setState({
             ...state, //Lưu giữ lại các giá trị cũ trước khi setState 
            [name]: value
        })
    }


    console.log('arrContent', arrContent);
    console.log(props.arrContent);
    return (
        <div className="container">
            <h3>Demo hook redux</h3>
            <div className="card">
                <div className="card-header">
                    {arrContent.map((cmt, index) => {
                        return <div className="row" key={index}>
                            <div className="col-2">
                                <img src={`https://i.pravatar.cc/50?u=${cmt.name}`} />
                            </div>
                            <div className="col-10">
                                <h3 className="text-danger">{cmt.name}</h3>
                                <p>{cmt.content}</p>
                            </div>
                        </div>
                    })}
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <p>Name</p>
                        <input 
                        onChange={handleChangeInput} className="form-control" name="name" />
                    </div>
                    <div className="form-group">
                        <p>Content</p>
                        <textarea 
                        onChange={handleChangeInput}
                        className="form-control" name="content" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success" onClick={()=>{
                            sendComment()
                        }}>Send!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


// const mapStateToProps = (rootReducer) => {
//     return {
//         arrContent: rootReducer.FaceBookAppReducer.arrContent
//     }
// }

// export default connect(mapStateToProps)(DemoHookRedux);