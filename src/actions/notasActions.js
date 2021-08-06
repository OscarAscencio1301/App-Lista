import { types } from "../types/types";

export const activarNota = (nota) => ({
    type: types.notaActiva,
    payload: nota
})

export const agregarNota = (nota) => ({
    type: types.notaAgregar,
    payload: nota
})

export const limpiarNota = () => ({
    type: types.notaLimpieza,

})

export const editarNota = (nota) => ({
    type: types.notaActualizar,
    payload: nota
})

export const borrarNota = (id) => ({
    type: types.notaBorrar,
    payload: id
})