
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

const initialState = {
    cartItems: [],
    cart: null,
    error: null,
    isLoading: null
}

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ITEM_TO_CART_REQUEST:
            return { ...state, isLoading: true, error: null }
        case ADD_ITEM_TO_CART_SUCCESS:
            return { ...state, isLoading: false, error: null, cartItems: [...state.cartItems, action.payload.cartItems] }

        case ADD_ITEM_TO_CART_FAILURE:
            return { ...state, isLoading: false, error: action.payload }

        case GET_CART_REQUEST:
            return { ...state, isLoading: true, error: null }
        case GET_CART_SUCCESS:
            console.log('inSwitch>',action.payload)
            return { ...state, isLoading: false, error: null, cartItems: action.payload.cartItems, cart: action.payload }
        case GET_CART_FAILURE:
            return { ...state, isLoading: false, error: action.payload }


        case REMOVE_CART_ITEM_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
            return { ...state, isLoading: false, error: action.payload }
        case REMOVE_CART_ITEM_SUCCESS:
            return { ...state, isLoading: false, error: null, delete: action.payload }
        case UPDATE_CART_ITEM_SUCCESS:
            return { ...state, isLoading: false, error: null, updateCartItem: action.payload }

        case REMOVE_CART_ITEM_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
            return { ...state, isLoading: false, error: action.payload }
        default:
            return state


    }




}
