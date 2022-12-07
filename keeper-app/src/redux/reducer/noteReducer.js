const initialData = [];

const noteReducer = (state=initialData, action) => {
    switch(action.type){
        case 'ADD_NOTE':
            return [...state,action.payload]
        default :
            return state;
    }
}

export default noteReducer;