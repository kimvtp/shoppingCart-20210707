import {remove, map} from 'lodash'; 

import * as types from '../const/actionType';
import * as configs from '../const/config';


let defaultState = [];
let cart = JSON.parse(localStorage.getItem(configs.LOCAL_STORAGE));
defaultState = (cart!==null && cart.length>0) ? cart : defaultState;

let getProductPosition = (cartList, product) => {
    for (var i = 0; i < cartList.length; i++) {
        if(cartList[i].product.id === product.id) {
           return i;
        }
    }
    return -1;
}

const cartList = (state = defaultState, action) => {
    let newList = [...state];
    let {product, quantity} = action;
    let position = -1;

    switch (action.type){
        case types.ADD_TO_CART: 
            position = getProductPosition(newList, product);

            if (position> -1) {
                newList[position].quantity += quantity;
            } else {
                newList.push({product, quantity}); 
            }

            localStorage.setItem(configs.LOCAL_STORAGE, JSON.stringify(newList));
            
            return newList;

        case types.UPDATE_CART_ITEM:
            position = getProductPosition(newList, product);
            
            if (position> -1) {
                newList[position].quantity = quantity;
            }
            
            localStorage.setItem(configs.LOCAL_STORAGE, JSON.stringify(newList));

            return newList;

        case types.DELETE_CART_ITEM:
            remove(newList,(item) => {
                return item.product.id === product.id;
            });

            localStorage.setItem(configs.LOCAL_STORAGE, JSON.stringify(newList));

            return newList;
        
        default:
            return state;
        
    }
}

export default cartList;
