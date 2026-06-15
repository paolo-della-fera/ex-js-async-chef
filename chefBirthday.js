async function getChefBirthday(id) {

    let ricetta
    try {
        const ricettaId = await fetch(`https://dummyjson.com/recipes/${id}`)
        ricetta = await ricettaId.json()
    } catch (error) {
        console.error(error)
        throw new Error(`Non posso recuperare la ricetta con l'id:${id}`)
    }

    if (ricetta.message) {
        throw new Error(ricetta.message)
    }

    let chef
    try {
        const chefId = await fetch(`https://dummyjson.com/users/${ricetta.userId}`)
        chef = await chefId.json()
    } catch (error) {
        console.error(error)
        throw new Error(`Non posso recuperare lo chef con l'id: ${id}`)
    }

    if (chef.message) {
        throw new Error(chef.message)
    }

    return chef.birthDate

}

(async () => {
    try {
        const birthday = await getChefBirthday(1)
        console.log('Data di nascita dello chef:', birthday)
    } catch (error) {
        console.error(error)
    } finally {
        console.log('Fine!')
    }
})()