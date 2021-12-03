


const stateDefault = { 
    arrContent : [
        {name:'Thanh',content:'Hello cybersoft'},
        {name:'Sĩ',content:'Hello ! Bootcamp15'}
    ]
}


export const FaceBookAppReducer = (state=stateDefault,action) => {
    
    switch(action.type) {
        case 'ADD_COMMENT': {
            //Vừa sao chép ra mảng mới vừa push 1 phần tử action.comment vào mảng
            state.arrContent = [...state.arrContent,action.comment];
            // state.arrContent.push(action.comment)

            return {...state};
        }
        default : return {...state}
    }
}
