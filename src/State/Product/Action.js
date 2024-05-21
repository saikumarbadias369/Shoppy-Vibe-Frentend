import { api } from "../../Config/apiConfig"
import {FIND_PRODUCTS_SUCCESS,FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_BY_ID_REQUEST,FIND_PRODUCTS_BY_ID_SUCCESS,FIND_PRODUCTS_BY_ID_FAILURE} from './ActionType'

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCTS_REQUEST})
    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize,query } = reqData
    console.log('maxPrice', minPrice, maxPrice)
    try {
       
        const { data } = await api.get(`/api/products?search=${query}&color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
    }
}



export const findProductById = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCTS_BY_ID_REQUEST})
    const { productId } = reqData
    try {
        const { data } =await api.get(`/api/products/id/${productId}`)

        console.log("productDetails>>",data)
        dispatch({type:FIND_PRODUCTS_BY_ID_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCTS_BY_ID_FAILURE,payload:error.message})
    }
}