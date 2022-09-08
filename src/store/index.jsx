import { createStore } from 'redux'

function reducer(state = {}, action) {
    let stateDays = {}
    let stateToday = {}

    if (action.type === 'TOGGLE_SEARCH') {
        let api = action.searchs
        console.log(api.days.list)

        if (api.days) {
            let { list } = api.days

            for (let c=0; c < 8; c++) {

            }
            
            stateDays = {
                temps: {

                },
                prev: {

                },
                name: {

                },
            }
        }
        if (api.today) {
            let { today } = api

            stateToday = {
                temps: {
                    temp: today.main.temp,
                    max: today.main.temp_max,
                    min: today.main.temp_min,
                    sensa: today.main.feels_like,
                    humi: today.main.humidity
                },
                prev: {
                    description: today.weather[0].description,
                    icon: today.weather[0].icon
                },
                name: {
                    pais: today.sys.country,
                    city: today.name
                }
            }
        }
    }

    return state = {
        stateToday,
        stateDays,
    }
}

let store = createStore(reducer)

export { store }
