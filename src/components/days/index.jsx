import { connect } from 'react-redux'
import Day from "../day"

function Days(state) {
    const hours = state?.stateDays
    let now = new Date
    let { weekName } = state
    let c = now.getDay()

    return (
        <div className="flex justify-center md:flex-wrap md:max-w-[300px] mb-2 md:mb-0">
            {
                hours.map((h, i) => {
                    if (c > 6) {
                        c = 0
                    }

                    if (i < 4) return (<Day key={i} day={h} week={weekName[c++]} />)
                })
            }
        </div>
    )
}

export default connect(state => (state))(Days)
