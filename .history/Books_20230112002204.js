const cheerio = require('cheerio')
const axios = require("axios")
const j2sp = require("json2csv").Parser;    //3. Saving Scraped dat to CSV.

const mystery = "https://books.toscrape.com/catalogue/category/books/mystery_3/index.html"
const baseURL = "https://books.toscrape.com/catalogue/category/books/mystery_3/"   //2. handling pagination.

//3. Saving Scraped dat to CSV.

const book_data = []  //1.storing the books obj inside an array.


async function getBooks(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
  
    const books = $("article");   
    books.each(function() {       //1.1
      title = $(this).find("h3 a").text();
      price = $(this).find(".price_color").text();
      stock = $(this).find(".availability").text().trim();

      book_data.push({title, price, stock})
    });

    //2.1
    if($(".next a").length > 0) {
      next_page = baseURL + $(".next a").attr("href");
      getBooks(next_page);
    }

    console.log(book_data)
  }
  catch(error) {
    console.error(error)
  }
}

getBooks(mystery);