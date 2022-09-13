function Day({ day }) {
    // console.log(day)

    return (
        <div className="text-zinc-800 bg-slate-400 rounded-md flex flex-col items-center justify-between text-center p-2 m-2 shadow-md shadow-black">
            <span>Semana</span>
            <img
                className="w-[70px]"
                src={`http://openweathermap.org/img/w/04n.png`}
            />
            <span>Nublado</span>
            <div className="flex justify-between pt-[4px]">
                <div className="flex flex-col mx-2">
                    <span className="text-xl font-semibold text-zinc-900">20°</span>
                </div>
                <div className="flex flex-col mx-2">
                    <span className="text-xl text-zinc-700">16°</span>
                </div>
            </div>
        </div>
    )
}

export { Day }
