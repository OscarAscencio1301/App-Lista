import React from 'react'
import { useDispatch } from 'react-redux'
import { activarNota, borrarNota } from '../../actions/notasActions'
import { abrirModal } from '../../actions/uiActions'

 

export const Notas = ({id, titulo, nota, importancia}) => {
    const dispatch = useDispatch()


    
    const botonEditar = () => {
        dispatch(activarNota({
            id,
            titulo,
            nota,
            importancia
        }))
        dispatch(abrirModal())

    }

    const botonBorrar = () => {
        dispatch(borrarNota(id))

    }
    return (
        <tr className="entrada">
            <th scope="row">{id}</th>
            <td>{titulo}</td>
            <td>{nota}</td>
            <td>{importancia}</td>
            <td>
                <button className="btn btn-warning mx-2" onClick={botonEditar}>Editar</button>
                <button className="btn btn-danger mx-2" onClick={botonBorrar}>Borrar</button>
            </td>
        </tr>
    )
}
