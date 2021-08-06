
import { useSelector } from 'react-redux'
import { Notas } from './Notas'

export const Entrada = () => {
    const {notas} = useSelector(state => state.listaNotas)

    return (
        <>
            {
                notas.map(notas => <Notas key={notas.id} {...notas}/>)
            }
        </>
    )
}
