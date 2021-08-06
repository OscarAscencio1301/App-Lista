import React from 'react'
import { ModalLista } from './ModalLista'
import { BotonAgregar } from './ui/BotonAgregar'
import { Entrada } from './ui/Entrada'

export const Lista = () => {

    
    return (
        <div className="container-fluid mx-auto my-5">
            <h1 className="text-center">Lista de Tareas</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Nota</th>
                        <th scope="col">Importancia</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <Entrada />
                    
                </tbody>
            </table>
            <ModalLista />
           <BotonAgregar />
            
        </div>
    )
}
