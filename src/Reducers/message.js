import * as types from '../const/actionType';
import * as configMessage from '../const/messages';

const defaultState = configMessage.MSG_READY_TO_BUY;
const message = (state = defaultState, action) => {
    switch (action.type){
        case types.CHANGE_MESSEAGE:
            return action.message;
        default:
            return state;
        
    }
}

export default message;
