async function getChefBirthday(id) {

    const ricettaId = await fetch(`https://dummyjson.com/recipes/${id}`)
    const ricetta =  await ricettaId.json()

    const chefId = await fetch(`https://dummyjson.com/users/${ricetta.userId}`)
    const chef = await chefId.json()
    
    return chef.birthDate

}

(async () => {
    try{
        const birthday = await getChefBirthday(1)
        console.log('Data di nascita dello chef:', birthday)
    }catch(error) {
        console.error(error)
    }finally{
        console.log('Fine!')
    }
})()