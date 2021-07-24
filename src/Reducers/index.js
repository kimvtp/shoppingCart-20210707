import {combineReducers} from 'redux';
import message from './message';
import cartList from './cartList';

let Reducers = combineReducers({
    message,    
    cartList

});

export default Reducers;
