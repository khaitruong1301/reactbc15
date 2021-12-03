import React, { useRef, useState } from 'react'

export default function DemoUseRef(props) {

    const [keyWord, setKeyWord] = useState('');
    let tuKhoaVuaTim = useRef('');
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const search = (e) => {
        //Lấy ra giá trị search value từ input
        let { value } = e.target;
        setKeyWord(value);
    }
    const handleSearch = () => {
        // console.log(keyWord)
        tuKhoaVuaTim.current = keyWord;
        console.log(tuKhoaVuaTim.current)
    }
    const handleLogin = () => {
        console.log('username', usernameRef.current.value);
        console.log('password', passwordRef.current.value);
    }
    return (
        <div className="container">
            {/* <h3>Từ khoá vừa tìm: {tuKhoaVuaTim.current}</h3> */}
            <div className="form-group">
                <input className="form-control" onChange={search} />
                <button className="mt-2 btn btn-success" onClick={()=>{
                    handleSearch()
                }}>Search</button>
            </div>
            <hr />

            <h3>Login</h3>
            <div className="form-group">
                <p>Username</p>
                <input ref={usernameRef} className="form-control" />
            </div>
            <div className="form-group">
                <p>Password</p>
                <input ref={passwordRef} className="form-control" />
            </div>
            <div className="form-group">
                <button className="btn btn-success" onClick={() => {
                    handleLogin();
                }}>Login</button>
            </div>
        </div>
    )
}
