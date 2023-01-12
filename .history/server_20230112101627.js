const cheerio = require('cheerio')    //parsing raw HTML coming from axios.
const axios = require("axios")        //HTTP requests.


const url = "https://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"


async function getGenre() {
  try {
    const response = await axios.get(url);
    const $=cheerio.load(response.data);
    const genre = $("h1").text();   //cause its only 1 h1 in the html.

    console.log(genre)
  }
  catch(error) {
    console.error(error)
  }
}

// getGenre();


async function getTitle() {
  try {
    const res = await axios.get(url)
    const $= cheerio.load(res.data)
    const price = $("p.price_color")
    console.log(price);
  }
  catch(error) {
    console.error(error);
  }
}
getTitle();