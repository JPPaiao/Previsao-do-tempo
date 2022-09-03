function tempApi() {
    let request = fetch("http://api.weatherapi.com/v1/current.json?key=d91c34e2e7d8468ebbe193826222008&q=Santos&lang=pt")
    .then((r) => {
        if (r.status == 200) {
            return r.json()
        }
    })
    .then((r) => {
        console.log(r)
        return r
    })
    return request
}

export default tempApi
