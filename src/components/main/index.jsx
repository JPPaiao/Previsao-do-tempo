import { connect } from 'react-redux'
import Pesquisas from '../pesquisas'

function Main(state) {
    console.log(state)
    const { name, prev, temps } = state?.stateToday ?? ""
    let dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    let now = new Date

    return (
        <main className='flex flex-col items-center w-[100%] max-w-2xl m-auto'>
            <Pesquisas />
            <div className='w-[380px] max-w-[580px] bg-slate-400 rounded-md p-3'>
                <div className=''>
                    <div className="px-4 flex justify-between text-zinc-800">
                        <div className='flex flex-col'>
                            <span className="text-xl">{dayName[now.getDay()] + ', ' + now.getDate()}</span>
                            <span className="text-4xl  font-semibold">{name?.city}</span>
                            <span className="text-xl">{prev?.description}</span>
                        </div>
                        <div className="flex flex-col items-center justify-evenly mt-3">
                            <span className="text-3xl text-zinc-800">{temps?.max}° Max</span>
                            <span className="text-3xl text-zinc-600">{temps?.min}° Min</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-7xl text-center px-4">
                        <img
                            className='h-36 w-36'
                            src={`http://openweathermap.org/img/w/${prev?.icon}.png`}
                        />
                        <span className='text-3xl text-zinc-800 font-bold'>{temps?.temp}°</span>
                    </div>
                </div>
            </div>
            <div>
                <span>Outros dias</span>
            </div>
        </main>
    )
}

export default connect(state => (state))(Main)
