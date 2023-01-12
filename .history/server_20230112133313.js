const cheerio = require('cheerio')    
const axios = require("axios")        


const url = "https://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"


async function getGenre() {
  try {
    const response = await axios.get(url);
    const $=cheerio.load(response.data);
    const genre = $("h1").text();   

    console.log(genre)
  }
  catch(error) {
    console.error(error)
  }
}

