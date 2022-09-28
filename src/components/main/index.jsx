import { connect } from 'react-redux'
import Days from '../days'
import Pesquisas from '../pesquisas'

function Main(state) {
    
    const { name, prev, temps } = state?.stateToday ?? ""
    console.log(state)

    let now = new Date
    let weekName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    let dayWeek = weekName[now.getDay()]

    return (
        <main className='flex flex-col justify-center items-center w-[100%] m-auto'>
            <Pesquisas />
            <div className='flex md:flex-row flex-col w-[410px] md:w-auto mt-3'>
                <div className='min-h-[350px] min-w-[360px] bg-slate-400 rounded-md p-2 my-2 shadow-md shadow-black flex flex-col justify-center'>
                    <div className="px-3 flex justify-between text-zinc-800">
                        <div className='flex flex-col max-w-[180px]'>
                            <span className="text-xl pl-[2px]">{dayWeek + ', ' + now.getDate()}</span>
                            <span className="text-3xl font-semibold">{name?.city}</span>
                        </div>
                        <div className="flex flex-col items-center justify-start ">
                            <span className="text-3xl text-zinc-800">{Math.round(temps?.max ?? 0)}°C Max</span>
                            <span className="text-3xl text-zinc-600">{Math.round(temps?.min ?? 0)}°C Min</span>
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
                <div>
                    <Days weekName={weekName} />
                </div>
            </div>
        </main>
    )
}

export default connect(state => (state))(Main)
