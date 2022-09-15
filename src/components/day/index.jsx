import { connect } from 'react-redux'

function Day(state) {
    const { prev } = state?.day ?? ''
    const { temps } = state?.day ?? ''

    return (
        <div className="text-zinc-800 bg-slate-400 w-[120px] rounded-md flex flex-col items-center justify-between text-center p-2 m-2 shadow-md shadow-black">
            <span>Semana</span>
            <img
                className="w-[70px]"
                src={`http://openweathermap.org/img/w/${prev.icon}.png`}
            />
            <span>{prev.description}</span>
            <div className="flex justify-between pt-[4px]">
                <div className="flex flex-col mx-2">
                    <span className="text-xl font-semibold text-zinc-900">{Math.round(temps.max)}</span>
                </div>
                <div className="flex flex-col mx-2">
                    <span className="text-xl text-zinc-700">{Math.round(temps.min)}</span>
                </div>
            </div>
        </div>
    )
}

export default connect(state => (state))(Day)
