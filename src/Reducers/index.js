import {combineReducers} from 'redux';
import isShowMessage from './isShowMessage';
import cartList from './cartList';

let Reducers = combineReducers({
    isShowMessage,    
    cartList

});

export default Reducers;
