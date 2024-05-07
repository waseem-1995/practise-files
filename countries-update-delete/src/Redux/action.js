import axios from "axios"
import { GET_COUNTRIES_FAILURE, GET_COUNTRIES_REQUEST, GET_COUNTRIES_SUCCESS } from "./actionTypes"

const get_country_request = ()=> {
    return {
        type : GET_COUNTRIES_REQUEST
    }
}
const get_country_success = (data)=> {
    return {
        type : GET_COUNTRIES_SUCCESS,
        payload : data
    }
}
const get_country_failure = ()=> {
    return {
        type : GET_COUNTRIES_FAILURE
    }
}

const get_delete_request = ()=> {
    return {
        type : GET_COUNTRIES_REQUEST
    }
}
const get_delete_success = (data)=> {
    return {
        type : GET_COUNTRIES_SUCCESS,
        payload : data
    }
}
const get_delete_failure = ()=> {
    return {
        type : GET_COUNTRIES_FAILURE
    }
}

export const getDataFunc = ()=> (dispatch)=> {
    dispatch(get_country_request());
    axios.get("http://localhost:8080/countries")
    .then((res)=> dispatch(get_country_success(res.data)))
    .catch(()=> dispatch(get_country_failure()));

}

export const getDataDelete = (id)=> (dispatch)=> {
    dispatch(get_delete_request());
    axios.delete(`http://localhost:8080/countries/${id}`)
    .then(()=> {
        axios.get("http://localhost:8080/countries")
    .then((res)=> dispatch(get_country_success(res.data)))
    .catch(()=> dispatch(get_country_failure()));
    })
    .catch((error)=> dispatch(get_delete_failure()));

}
const get_update_request = ()=> {
    return {
        type : GET_COUNTRIES_REQUEST
    }
}
const get_update_success = (data)=> {
    return {
        type : GET_COUNTRIES_SUCCESS,
        payload : data
    }
}
const get_update_failure = ()=> {
    return {
        type : GET_COUNTRIES_FAILURE
    }
}

export const get_update_func = (payload,id)=> (dispatch)=> {
    dispatch(get_update_request());
    axios.patch(`http://localhost:8080/countries/${id}`,payload)
    .then(()=> {
        axios.get("http://localhost:8080/countries")
    .then((res)=> dispatch(get_country_success(res.data)))
    .catch(()=> dispatch(get_country_failure()));
    })
        .catch((error)=> dispatch(get_update_failure(error)))

}