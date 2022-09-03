import { createStore } from 'redux'

function reducer(state = [], action) {
    if (action.type == 'TOGGLE_SEARCH') {
        state = action.searchs

        let infos = {
            temps: {
                temp: state.main.temp,
                max: state.main.temp_max,
                min: state.main.temp_min,
                sensa: state.main.feels_like,
                humi: state.main.humidity
            },
            prev: {
                description: state.weather[0].description,
                icon: state.weather[0].icon
            },
            name: {
                pais: state.sys.country,
                city: state.name
            }
        }

        return infos
    } else {
        return state
    }
}

let store = createStore(reducer)

export { store }
