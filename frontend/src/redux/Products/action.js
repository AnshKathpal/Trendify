import {
    GET_PRODUCT_SUCCESS,
    POST_PRODUCT_SUCCESS,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    PRODUCT_LOADING,
    PRODUCT_ERROR,
  } from "./actionTypes";

  import axios from "axios"


  export const getProducts = (obj) => (dispatch) => {

    dispatch({type : PRODUCT_LOADING})
    axios.get("http://localhost:8080/products", obj)
    .then((res) => {
        dispatch({type : GET_PRODUCT_SUCCESS, payload : res.data})
    })
    .catch((err) => {
        dispatch({type : PRODUCT_ERROR})
    })


  }



  export const postProducts = (obj) => (dispatch) => {
    dispatch({type : PRODUCT_LOADING})
    axios.post("http://localhost:8080/products",obj)
    .then((res) => {
      dispatch({type : POST_PRODUCT_SUCCESS, payload : res.data})
    })
    .catch((err) => {
      dispatch({type : PRODUCT_ERROR })
    })
  }