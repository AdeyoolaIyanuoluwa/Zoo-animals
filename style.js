const movie = "https://zoo-animal-api.herokuapp.com/animals/rand"
const getMovie =  async() =>{
    let animalInfo = []
    let response = await fetch(movie)
    let jsonResponse = await response.json()
    console.log(jsonResponse)
    animalInfo.push(jsonResponse)
        disp.innerHTML =`
                <h1>Name:${animalInfo[0].name}</h1>
                <h1>Latin name:${animalInfo[0].latin_name}</h1>
                <h1>Habitat:${animalInfo[0].habitat}</h1>
                <h1>Lifespan:${animalInfo[0].lifespan}</h1>
                <h1>Weight:${animalInfo[0].weight_max}</h1>
                <h1>Diet:${animalInfo[0].diet}</h1>
                `   
           Image.innerHTML = `
           <img src="${animalInfo[0].image_link}">`       
}













// const movie = "https://zoo-animal-api.herokuapp.com/animals/rand"
// const movie = "https://www.fishwatch.gov/api/species"
// const getMovie =  async() =>{
//     let response = await fetch(movie)
//     let dataInJson = await response.json()
//     // console.log(jsonResponse)
//         // disp.innerHTML =`
//         // <h1>${.category}</h1>
//         // `
//         jsonResponse.map((_,i)=>{
//             let habitat = dataInJson[i].habitat
//         })     
// }