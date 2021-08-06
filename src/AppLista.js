
import { Provider } from 'react-redux'
import { Lista } from './components/Lista'
import { store } from './store/store'

export const AppLista = () => { 
    
    return (
        <Provider store={store}>
            <Lista />
        </Provider>
    )
}
