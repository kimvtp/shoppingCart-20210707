import * as types from './../const/const';


export const actAddToCart = (id, name, price, quantity)  => {
    return {
        type: types.ADD_TO_CART,
        item: {
            id: id,
            productName: name,
            productPrice: price,            
            quantity: quantity
        }      
    }
}

export const actDeleteCartItem = (id) => {
    return {
        type: types.DELETE_CART_ITEM,
        id
    }
}

export const actUpdateCart = (id, quantity)  => {
    return {
        type: types.UPDATE_CART_ITEM,
        item: {
            id: id,
            quantity: quantity
        }  
    }
}

export const actShowMessage = () => {
    return {
        type: types.SHOW_MESSEAGE
    }
}