import * as types from '../const/const';
import {remove, map} from 'lodash'; 

const defaultState = [];

const cartList = (state = defaultState, action) => {
    let newList = [...state];
    
    switch (action.type){
        case types.ADD_TO_CART: 
            let {id, quantity} = action.item;           
            let flag = true;
            for (var i = 0; i < newList.length; i++) {
                if(newList[i].id === id) {
                    newList[i].quantity += quantity;
                    flag = false;
                    break;
                }
            }
            // newList.forEach(element => {
            //     if(element.id === id) {
            //         element.quantity += quantity;
            //         flag = false;
            //         break;
            //     }
            // });
            
            if (flag) {
                newList.push(action.item); 
            }
            console.log(newList);
            return newList;

        case types.DELETE_CART_ITEM:
            console.log(action);
            remove(newList,(item) => {
                return item.id === action.id;
            });

            return newList;

        case types.UPDATE_CART_ITEM:
            console.log("actionupdate", action);
            let itemUpdate = action.item;
            let newQuantity = itemUpdate.quantity;
            map(newList,(item) => {
                if(item.id === itemUpdate.id) {
                    item.quantity = newQuantity;
                    return item;
                }
                return item;
            });
            console.log("new list", newList);
            return newList;
        default:
            return state;
        
    }
}

export default cartList;
