async function fetchJson(url) {
    const response = await fetch(url)
    const obj = await response.json()
    return obj
}

async function getChefBirthday(id) {

    let ricetta 
    try{
        ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`)
    }catch(error) {
        throw new Error(`Non posso recuperare la ricetta con l'id:${id}`)
    }

    if (ricetta.message) {
        throw new Error(ricetta.message)
    }

    let chef
    try{
        chef = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`)
    }catch(error) {
        throw new Error(`Non posso recuperare la data di nascita dello chef con l'id: ${id}`)
    }

    if (chef.message) {
        throw new Error(chef.message)
    }

    return chef.birthDate

}

(async () => {
    try{
        const date = await getChefBirthday(1)
        console.log('Data di nascita dello chef:', date)
    }catch(error) {
        console.error(error)
    }finally{
        console.log('Fine!')
    }
})()