const cheerio = require('cheerio')
const axios = require("axios")

const url = "https://books.toscrape.com/catalogue/category/books/mystery_3/index.html"

async function getGenre() {
  try {
    const response = await axios.get(url)
  }
  catch(error) {
    console.log(error.message)
  }
}