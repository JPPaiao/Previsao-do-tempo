import { useState } from "react"
import { connect } from "react-redux"

function Pesquisas(state) {
    const [search, setSearch] = useState("")

    function toggleSearch(searchs) {
        return {
            type: 'TOGGLE_SEARCH',
            searchs,
        }
    }

    async function handleSearch() {
        let today
        let days

        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=pt_br&units=metric&appid=9a00f6925a434fb1d724f3d8cf5bcfc7`)
        .then((r) => {
            if (r.status == 200) {
                return r.json()
            }
        })
        .then((r) => {
            today = r
        })

        await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&lang=pt_br&units=metric&appid=9a00f6925a434fb1d724f3d8cf5bcfc7`)
        .then((r) => {
            if (r.status == 200) {
                return r.json()
            }
        })
        .then((r) => {
            days = r
        })

        state.dispatch(toggleSearch({today, days}))
    }

    return (
        <div className='px-7 py-6'>
            <label htmlFor="search-form">
                <input
                    className="border-none px-3 py-2 rounded-md"
                    type="search"
                    name="search-form"
                    id="search-form"
                    placeholder="Pesquisar cidade..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <input
                    className="mx-4 px-4 py-2 bg-slate-800 text-white cursor-pointer transition-colors rounded-md hover:bg-slate-600"
                    type="submit"
                    value="Pesquisar"
                    onClick={() => handleSearch()}
                />
            </label>
        </div>
    )
}

export default connect(state => (state))(Pesquisas)
