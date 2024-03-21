async function api() {
    try {
        const response = await fetch('https://api.remove.bg/v1.0/removebg')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al realizar la llamada a la API:', error)
        throw error 
    }
}

api()
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error(error)
    })
