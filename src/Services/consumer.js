async function consomeAPI(pagina) {
    const response = await fetch(`http://localhost:3000/${pagina}`)

    const data = await response.json()

    if(response.ok) {
        return await data
    }

    return {}
}

export { consomeAPI }