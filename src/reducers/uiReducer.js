import { types } from "../types/types";

export const uiReducer = (state = { modalAbierto: false }, action) => {
    switch (action.type) {
        case types.abrirModal:
            return {
                ...state,
                modalAbierto: true
            }
        case types.cerrarModal:
            return {
                ...state,
                modalAbierto: false
            }


        default:
            return state;
    }

}