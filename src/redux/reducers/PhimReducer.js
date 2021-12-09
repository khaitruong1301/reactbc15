


const stateDefault = {
    mangPhim:[
        {maPhim:1,tenPhim:'AAA',hinhAnh:'https://i.pravatar.cc/250',moTa:'AAAA'}
    ]
}

export const PhimReducer = (state=stateDefault,action) => {
    
    switch(action.type) {
        case 'GET_API_PHIM': {
            state.mangPhim = action.data;
            return {...state};
        }
        default : return {...state}
    }
}