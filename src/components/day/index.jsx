import { connect } from 'react-redux'

function Day(state) {
    const { prev, temps } = state?.day
    const { week } = state

    return (
        <div className="text-black backdrop-blur-[8px] w-[120px] rounded-md flex flex-col items-center justify-between text-center p-2 m-2 shadow-md shadow-black">
            <span>{week}</span>
            <img
                className="w-[70px]"
                src={`http://openweathermap.org/img/w/${prev.icon}.png`}
            />
            <span>{prev.description}</span>
            <div className="flex justify-between pt-[4px] text-black ">
                <div className="flex flex-col mx-2">
                    <span className="text-xl font-bold shadow-2xl">{Math.ceil(temps.max)}</span>
                </div>
                <div className="flex flex-col mx-2">
                    <span className="text-xl">{Math.floor(temps.min)}</span>
                </div>
            </div>
        </div>
    )
}

export default connect(state => (state))(Day)
