import React, { useEffect } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { agregarNota, editarNota, limpiarNota } from '../actions/notasActions';
import { cerrarModal } from '../actions/uiActions';
import { useForm } from '../hooks/useForm';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export const ModalLista = () => {
    const {modalAbierto} = useSelector(state => state.ui)
    const {notaActiva} = useSelector(state => state.listaNotas)
    const dispatch = useDispatch()

    const  cerrarModalBoton = () => {
        dispatch(cerrarModal())
        dispatch(limpiarNota())
    }

    const [valores, setvalores, cambioInput, reset] = useForm({
        titulo: '',
        nota: '',
        importancia: ''
    })
    useEffect(() => {
        if(notaActiva){
            setvalores(notaActiva)
        }else {
            setvalores({
                titulo: '',
                nota: '',
                importancia: ''
            })
        }
        
    }, [notaActiva, setvalores])

    const {titulo, nota, importancia} = valores

    const enviarFormulario = (e) => {
        e.preventDefault();
        if(titulo.trim().length < 2 ){
            return Swal.fire({
                title: 'Titulo Demasiado Corto',
                icon: 'error'
            })
        }
        if(nota.trim().length < 2 ){
            return Swal.fire({
                title: 'Nota Demasiado Pequeña',
                icon: 'error'
            })
        }
        if(importancia.trim().length === 0 ){
            return Swal.fire({
                title: 'Selecciona el nivel de Importancia',
                icon: 'error'
            })
        }
        if(notaActiva) {
            dispatch(editarNota(valores))
        
        }else {
            dispatch(agregarNota({
                ...valores,
                id:Date.now()
            }))
        }
        cerrarModalBoton();
        reset();
    }
    return (
        <>
        <Modal
        isOpen={modalAbierto}
        onRequestClose={cerrarModalBoton}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
      >
        <h1 className="container">Agregar Nota</h1>
        <hr />
        <form className="container" onSubmit={enviarFormulario}>
            <div id="emailHelp" className="form-text">Escribe el Titulo de la Nota</div>
            <input 
                type="text"
                className="form-control"
                placeholder="Titulo de la Nota"
                name="titulo"
                value={titulo}
                onChange={cambioInput}
            />
            <hr />
            <div id="emailHelp" className="form-text">Escribe el Texto de la Nota</div>
            <textarea
            className="form-control"
            placeholder="Texto de la Nota"
            name="nota"
            value={nota}
            onChange={cambioInput}
            style={{
                height: '30vh',
                resize: 'none'
            }}
            >
            </textarea>
            <div id="emailHelp" className="form-text mt-3">Nivel de Importancia</div>
            <select className="form-select" name="importancia" value={importancia} onChange={cambioInput}>
                <option value="">Seleccionar</option>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
            </select>
            <button className="btn btn-primary d-block w-100 mt-3" type="submit">{notaActiva ? 'Guardar Cambios' : 'Crear Nota'}</button>
        </form>
      </Modal>
      </>
    )
}
