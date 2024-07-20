const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://ums.cvmu.ac.in/GenerateResultHTML/2343/1204412.html";

async function main() {axios.get(url, {
    headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "max-age=0",
        "if-modified-since": "Sat, 24 Feb 2024 01:39:42 GMT",
        "if-none-match": "\"3b5b6a56c266da1:0\"",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
    }
})
.then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    $('.background1').each((index, element) => {
        const rowText = $(element).text().trim();
        if (rowText.startsWith('SGPA :')) {
            console.log(rowText);
        }
    });
})
.catch(error => {
    console.error('Error fetching the URL:', error);
});
}

main();