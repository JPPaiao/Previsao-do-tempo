import { connect } from 'react-redux'
import Day from "../day"

function Days(state) {
    const hours = state?.stateDays

    return (
        <div className="flex justify-center flex-wrap max-h-[400px] max-w-[300px]">
            {
                hours.map((h, i) => {
                    console.log(h)
                    if (i < 4) return (<Day key={i} day={h} />)
                })
            }
        </div>
    )
}

export default connect(state => (state))(Days)
