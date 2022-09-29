const movie = "https://opentdb.com/api.php?amount=20&difficulty=medium"
const getMovie =  async() =>{
    let response = await fetch(movie)
    let jsonResponse = await response.json()
    console.log(jsonResponse)
        // disp.innerHTML =`
        // <h1>${.category}</h1>
        // `     
}