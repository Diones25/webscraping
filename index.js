const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://pt.wikipedia.org/wiki/Oscar_de_melhor_filme";

(async () => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const list = [];

  $('.wikitable tbody tr').each((indice, elem) => {
    //const name = $(elem).find('td').last().text();
    const name = $(elem).find('td[style*="background:#FAEB86"]').last().text().replace('\n', '');
    const year = $(elem).find('td[style*="background:#FAEB86"]').first().prev('td').text().slice(-5).replace('\n', '');
                                        
    if(name != '') {
      const movie = {
        name,
        year
      }
      list.push(movie);            
    }

    console.log(list)
  })
})()