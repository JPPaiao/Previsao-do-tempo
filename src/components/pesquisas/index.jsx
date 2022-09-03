import { useState } from "react"
import { connect } from "react-redux"

function Pesquisas(state) {
    const [search, setSearch] = useState("")
    // const estado = {"coord":{"lon":-46.3336,"lat":-23.9608},"weather":[{"id":802,"main":"Clouds","description":"nuvens dispersas","icon":"03n"}],"base":"stations","main":{"temp":21.96,"feels_like":22.38,"temp_min":21.95,"temp_max":32.08,"pressure":1015,"humidity":83},"visibility":8000,"wind":{"speed":1.54,"deg":140},"clouds":{"all":49},"dt":1661636554,"sys":{"type":1,"id":8432,"country":"BR","sunrise":1661592087,"sunset":1661633565},"timezone":-10800,"id":3449433,"name":"Santos","cod":200}

    function toggleSearch(searchs) {
        return {
            type: 'TOGGLE_SEARCH',
            searchs,
        }
    }

    const handleSearch = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=pt_br&units=metric&appid=9a00f6925a434fb1d724f3d8cf5bcfc7`)
        .then((r) => {
            if (r.status == 200) {
                return r.json()
            }
        })
        .then((r) => {
            state.dispatch(toggleSearch(r))
        })
    }

    return (
        <div className='w-[100%] px-7 py-4'>
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
                {/* <input
                    className="mx-4 px-4 py-2 bg-slate-800 text-white cursor-pointer transition-colors rounded-md hover:bg-slate-600"
                    type="submit"
                    value="Pesquisar"
                    onClick={() => state.dispatch(toggleSearch(estado))}
                /> */}
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
