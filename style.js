const movie = "https://vpic.nhtsa.dot.gov/api/"
const getMovie = async() =>{
    let response = await fetch(movie)
    let jsonResponse = await response.json()
    console.log(jsonResponse)
}