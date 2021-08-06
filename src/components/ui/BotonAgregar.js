import React from 'react'
import { useDispatch } from 'react-redux'
import { limpiarNota } from '../../actions/notasActions'
import { abrirModal } from '../../actions/uiActions'

export const BotonAgregar = () => {
    const dispatch = useDispatch()

    const abrirModalBoton = () => {
        dispatch(limpiarNota())
        dispatch(abrirModal())
    }
    return (
       <button className="btn btn-primary d-block w-100" onClick={abrirModalBoton}>Agregar Nota</button>
    )
}
