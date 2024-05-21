import { api } from "../../Config/apiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"



export const GetCart = (reqData) => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST })
    try {
        const { data } = await api.get(`/api/cart/`)
console.log('cardItemData>',data)
        dispatch({ type: GET_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message })
    }
}



export const addItemToCart = (reqData) => async (dispatch) => {
    console.log("data added before>")
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
    try {
        const { data } = await api.put(`/api/cart/add`, reqData)

        console.log("data added>",data)
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
    }
}



export const removeCartItem = (cartItemId) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST })
    try {
        console.log("data>>entered"+cartItemId)
    
        const { data } = await api.delete(`/api/cart_items/${cartItemId}`)
console.log("data>>"+data)
        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: data })
    } catch (error) {
        console.log(error.message)
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message })
    }
}

export const updateCartItem = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST })
    try {
        console.log('reqData>'+reqData.data.quantity)
        const { data } = await api.put(`/api/cart_items/${reqData.CartItemId}`,reqData.data)
console.log("dateUpdate>"+data.product.price  )
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data })
    } catch (error) {
        console.log(error.message)
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message })
    }
}