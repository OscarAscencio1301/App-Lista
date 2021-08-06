import { types } from "../types/types";

const valoresIniciales = {
    notas: [],
    notaActiva: null
}
export const notaReducer = (state = valoresIniciales, action) => {
    switch (action.type) {
        case types.notaActiva:
            return {
                ...state,
                notaActiva: action.payload
            }
        case types.notaLimpieza:
            return {
                ...state,
                notaActiva: null
            }
        case types.notaAgregar:
            return {
                notaActiva: null,
                notas: [...state.notas, action.payload]
            }
        case types.notaActualizar:
            return {
                ...state,
                notas: state.notas.map(nota => nota.id === action.payload.id ? action.payload : nota)
            }
        case types.notaBorrar: 
            return {
                ...state,
                notas: state.notas.filter(nota => nota.id !== action.payload)
            }
        
           
    
        default:
            break;
    }
    return state

}