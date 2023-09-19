import {
  GET_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  PRODUCT_LOADING,
  PRODUCT_ERROR,
} from "./actionTypes";


const initialState = {
    products : [],
    isLoading : false,
    isError : false
}

export const reducer = (state = initialState, {type,payload}) => {


    switch(type){
        case PRODUCT_LOADING : {
            return {
                ...state,
                isLoading : true
            }
        }
        case GET_PRODUCT_SUCCESS : {
            return {
                ...state, isLoading : false, products : payload, isError : false
            }
        }
        case PRODUCT_ERROR : {
            return {
                ...state, isLoading : false, isError : true
            }
        }
        case POST_PRODUCT_SUCCESS : {
            return {
                ...state,isLoading : false, isError : false, products : [...state.products, payload]
            }
        }
        default : {
            return state
        }
    }

}