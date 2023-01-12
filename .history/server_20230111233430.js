const cheerio = require('cheerio')
const axios = require("axios")

#content_inner > article > div.row > div.col-sm-6.product_main > h1

const url = "https://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"


async function getGenre() {
  try {
    const response = await axios.get(url);
    const $=cheerio.load(response.data);
    const genre = $("h1").text();

    console.log(genre)
  }
  catch(error) {
    console.log(error.message)
  }
}