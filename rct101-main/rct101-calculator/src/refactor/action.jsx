import { ADD, DIV, INCRE_DECRE, MUL, SUB } from "./actiontype"

export const add = (n) => {
    return {
        type:ADD,
        payload:n
    }
}

export const sub = (n) => {
    return {
        type:SUB,
        payload:n
    }
}

export const mul = (n) => {
    return {
        type:MUL,
        payload:n
    }
}

export const divide = (n) => {
    return {
        type:DIV,
        payload:n
    }
}

export const incredecre = (n) => {
    return {
        type:INCRE_DECRE,
        payload:n
    }
}
