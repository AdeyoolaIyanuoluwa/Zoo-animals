const movie = "https://zoo-animal-api.herokuapp.com/animals/rand"
const getMovie =  async() =>{
    let animalInfo = []
    let response = await fetch(movie)
    let jsonResponse = await response.json()
    console.log(jsonResponse)
    animalInfo.push(jsonResponse)
        disp.innerHTML =`
                <p>Name:${animalInfo[0].name}</p>
                <p>Latin name:${animalInfo[0].latin_name}</p>
                <p>Habitat:${animalInfo[0].habitat}</p>
                <p>Lifespan:${animalInfo[0].lifespan}</p>
                <p>Weight:${animalInfo[0].weight_max}</p>
                <p>Diet:${animalInfo[0].diet}</p>
                
                `   
           image.innerHTML = `
           <img class = "w-75" src="${animalInfo[0].image_link}">`       
}













// const movie = "https://zoo-animal-api.herokuapp.com/animals/rand"
// const movie = "https://www.fishwatch.gov/api/species"
// const getMovie =  async() =>{
//     let animalInfo = []
//     let response = await fetch(movie)
//     let jsonResponse = await response.json()
//         console.log(jsonResponse)
//         animalInfo.push(jsonResponse)
//         disp.innerHTML =`
//                 <h1>Name:${animalInfo[0][SpeciesName]}</h1>
//                 <h1>Latin name:${animalInfo[0].latin_name}</h1>
//                 <h1>Habitat:${animalInfo[0].habitat}</h1>
//                 <h1>Lifespan:${animalInfo[0].lifespan}</h1>
//                 <h1>Weight:${animalInfo[0].weight_max}</h1>
//                 <h1>Diet:${animalInfo[0].diet}</h1>
//                 `      
// }