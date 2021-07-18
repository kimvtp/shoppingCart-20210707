import * as types from './../const/const';

const defaultState = false;
const isShowMessage = (state = defaultState, action) => {
    switch (action.type){
        case types.SHOW_MESSEAGE:
            return true;
        default:
            return state;
        
    }
}

export default isShowMessage;
