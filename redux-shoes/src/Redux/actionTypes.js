export const GET_SHOES_REQUEST = "getShoes/request";
export const GET_SHOES_SUCCESS = "getShoes/success";
export const GET_SHOES_FAILURE = "getShoes/failure";

export const UPDATE_SHOE_COUNT_REQUEST = "updateShoeCount/request";
export const UPDATE_SHOE_COUNT_SUCCESS = "updateShoeCount/success";
export const UPDATE_SHOE_COUNT_FAILURE = "updateShoeCount/failure";



export const inc_count_req = ()=>{
    return {
        type : UPDATE_SHOE_COUNT_SUCCESS,
        payload : true
    }
};


export const inc_count = (inc)=>{
    return {
        type : UPDATE_SHOE_COUNT_SUCCESS,
        payload : inc
    }
};

export const inc_count_fail = ()=>{
    return {
        type : UPDATE_SHOE_COUNT_SUCCESS,
        payload : true
    }
};

