import { createStore } from 'redux'

function reducer(state = {}, action) {
    let stateDays = []
    let stateToday = {}

    if (action.type === 'TOGGLE_SEARCH') {
        let api = action.searchs

        if (api.days) {
            let { list } = api.days

            list.forEach((i, c) => {
                if (i.dt_txt.indexOf('00:00:00') != -1) {
                    stateDays.push({
                        temps: {
                            temp: i.main.temp,
                            max: i.main.temp_max,
                            min: i.main.temp_min,
                            sensa: i.main.feels_like,
                            humi: i.main.humidity
                        },
                        prev: {
                            date: i.dt_txt,
                            description: i.weather[0].description,
                            icon: i.weather[0].icon
                        },
                    })
                }
            })
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
