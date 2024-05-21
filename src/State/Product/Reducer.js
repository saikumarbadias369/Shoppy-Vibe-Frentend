import { FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_BY_ID_REQUEST, FIND_PRODUCTS_BY_ID_SUCCESS, FIND_PRODUCTS_SUCCESS, FIND_PRODUCTS_BY_ID_FAILURE, FIND_PRODUCTS_FAILURE } from "./ActionType"

const initialState = {
    products: [],
    product: null,
    error: null,
    isLoading: null
}

export const customerProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCTS_BY_ID_REQUEST:
            return { ...state, isLoading: true, error: null }

        case FIND_PRODUCTS_BY_ID_SUCCESS:
            return { ...state, isLoading: false, error: null, product: action.payload }
        case FIND_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, error: null, products: action.payload  }

        case FIND_PRODUCTS_BY_ID_FAILURE:
        case FIND_PRODUCTS_FAILURE:
            return { ...state, isLoading: false, error: action.payload }

            default:
                return state
    }
}