import React,{useEffect, useState}  from 'react'

export default function DemoUseEffect(props) {
    let [number,setNumber] = useState(1);
    let [like,setLike] = useState(1);
    useEffect(()=> {
        //Chạy 1 lần duy nhất sau khi component render xong
        console.log('Thay thế componentDidMount')
    }, [])
    useEffect(()=> {
        console.log('Khi nào number thay đổi thì hàm này mới chạy - tương ứng componentDidUpdate');
    },[number])
    useEffect(()=>{
        return () => {
            console.log('Hàm này sẽ thực thi khi component mất khỏi giao diện giống componentWillUnmount')
        }
    },[])
    console.log('render');
    return (
        <div className="container">
            <h1>Demo useEffect</h1>
            <hr />
            <h3>Number: {number}</h3>
            <h3>Like: {like}</h3>
            <button className="btn btn-outline-danger mt-2" onClick={()=>{
                setNumber(number + 1);
            }}>+</button>
             <button className="btn btn-outline-danger mt-2 ml-2" onClick={()=>{
                setLike(like + 1);
            }}>+ Like</button>
        </div>
    )
}
