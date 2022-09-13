import { connect } from 'react-redux'
import { Days } from '../days'
import Pesquisas from '../pesquisas'

function Main(state) {
    console.log(state)
    const { name, prev, temps } = state?.stateToday ?? ""
    let dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    let now = new Date
    let infos = [1, 2, 3, 4]

    return (
        <main className='flex flex-col justify-center items-center w-[100%] max-w-2xl m-auto'>
            <Pesquisas />
            <div className='mx-2 flex'>
                <div className='w-[380px] h-[350px] max-w-[580px] bg-slate-400 rounded-md p-2 my-6 shadow-md shadow-black flex flex-col justify-center'>
                    <div className="px-3 flex justify-between text-zinc-800">
                        <div className='flex flex-col max-w-[180px]'>
                            <span className="text-xl pl-[2px]">{dayName[now.getDay()] + ', ' + now.getDate()}</span>
                            <span className="text-3xl font-semibold">{name?.city}</span>
                        </div>
                        <div className="flex flex-col items-center justify-start ">
                            <span className="text-3xl text-zinc-800">{temps?.max}°C Max</span>
                            <span className="text-3xl text-zinc-600">{temps?.min}°C Min</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-7xl text-center px-4">
                        <img
                            className='h-36 w-36'
                            src={`http://openweathermap.org/img/w/${prev?.icon}.png`}
                        />
                        <span className="text-2xl font-semibold text-zinc-800">{prev?.description}</span>
                        <span className='text-5xl text-zinc-800 font-bold'>{temps?.temp}°C</span>
                    </div>
                </div>
                <div className='mx-2 my-4 h-[100%]'>
                    <Days days={infos} />
                </div>
            </div>
        </main>
    )
}

export default connect(state => (state))(Main)
