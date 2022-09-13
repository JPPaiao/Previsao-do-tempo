import { Day } from "../day"

function Days({ days }) {
    // console.log(days)
    return (
        <div className="flex justify-center flex-wrap max-w-[300px]">
            {
                days.map(day => <Day key={day} day={day} />)
            }
        </div>
    )
}

export { Days }