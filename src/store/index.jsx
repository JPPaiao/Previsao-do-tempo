import { createStore } from 'redux'

function reducer(state = {}, action) {
    let stateDays = []
    let stateToday = {}


    if (action.type === 'TOGGLE_SEARCH') {
        let api = action.searchs
        // console.log(api.days.list)

        if (api.days) {
            let { list } = api.days

            // for (let c=0; c < list.length; c++) {
            //     f = {
            //         temps: {
            //             temp: list[c].main.temp,
            //             max: list[c].main.temp_max,
            //             min: list[c].main.temp_min,
            //             sensa: list[c].main.feels_like,
            //             humi: list[c].main.humidity
            //         },
            //         prev: {
            //             description: list[c].weather[0].description,
            //             icon: list[c].weather[0].icon
            //         },
            //     }
            // }

            let nwl = list.forearch((c) => {
                console.log(i, c)
                return [
                    {
                        temps: {
                            temp: list[c].main.temp,
                            max: list[c].main.temp_max,
                            min: list[c].main.temp_min,
                            sensa: list[c].main.feels_like,
                            humi: list[c].main.humidity
                        },
                        prev: {
                            description: list[c].weather[0].description,
                            icon: list[c].weather[0].icon
                        },
                    }
                ]
            })

            console.log(nwl)

            stateDays = {
                temps: {

                },
                prev: {

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
