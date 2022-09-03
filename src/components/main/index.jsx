import { connect } from 'react-redux'

function Main(state) {
    console.log(state)
    const { name, prev, temps } = state.state
    let dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    let now = new Date
    // let m = prev.description.charAt(0)

    return (
        <main className='flex flex-col max-w-[600px] py-4'>
            <div className='px-7'>
                <div className='px-4 py-2 bg-slate-400 rounded-md'>
                    <div className="px-4 pt-5 flex flex-col text-zinc-900">
                        <span className="text-xl">{dayName[now.getDay()] + ', ' + now.getDate()}</span>
                        <span className="text-4xl py-1 font-semibold">{name?.city ?? 'Não informado'}</span>
                        <span className="text-xl">{prev?.description ?? 'Não informado'}</span>
                    </div>
                    <div className="flex justify-between max-w-4xl p-4 pb-6">
                        <div className="text-7xl flex flex-col text-center px-4">
                            <img
                                className='h-24'
                                src={`http://openweathermap.org/img/w/${prev.icon}.png`}
                                alt="Imagem d tempo"
                            />
                            <span className='text-3xl'>{temps.temp}</span>
                        </div>
                        <div className="flex flex-col justify-between h-[90px]">
                            <span className="text-4xl text-zinc-800">{temps.max}° Max</span>
                            <span className="text-4xl text-zinc-600">{temps.min}° Min</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span>Outros dias</span>
                </div>
            </div>
        </main>
    )
}

export default connect(state => ({state}))(Main)
