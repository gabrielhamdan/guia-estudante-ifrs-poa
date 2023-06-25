async function consomeAPI(pagina) {
    const response = await fetch("https://ifrs-json-server.gabrielhamdan.repl.co")
    // const response = await fetch(`http://localhost:3000/${pagina}`)

    const data = await response.json()

    if(response.ok && data[pagina]) {
        return await data[pagina]
    }

    return {}
}

export { consomeAPI }