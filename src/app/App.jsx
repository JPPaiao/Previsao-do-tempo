import Main from '../components/main'
import { Header } from '../components/header'
import { store } from '../store'
import Pesquisas from '../components/pesquisas'

// store.subscribe(() => console.log(store.getState()))

function App() {

    return (
        <div>
            <div className='flex flex-col bg-slate-300'>
                <Header />
                <Pesquisas />
                <Main />
                <footer>

                </footer>
            </div>
        </div>
    )
}

export default App
