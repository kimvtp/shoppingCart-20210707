import * as types from '../const/actionType';


export const actAddToCart = (product, quantity)  => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actDeleteCartItem = (product) => {
    return {
        type: types.DELETE_CART_ITEM,
        product
    }
}

export const actUpdateCart = (product, quantity)  => {
    return {
        type: types.UPDATE_CART_ITEM,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSEAGE,
        message
    }
}