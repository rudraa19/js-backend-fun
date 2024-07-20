const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://ums.cvmu.ac.in/GenerateResultHTML/2343/1204412.html";
const number="2204135";
const lol = "2343";
async function main(number, idk) {
    try {
        const response = await axios.get(`https://ums.cvmu.ac.in/GenerateResultHTML/${idk}/${number}.html`, {
            headers: {
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "Accept-Language": "en-US,en;q=0.9",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
            }
        });

        const html = response.data;
        const $ = cheerio.load(html);

        $('.background1').each((index, element) => {
            const rowText = $(element).text().trim();
            if (rowText.startsWith('SGPA :')) {
                console.log(rowText);
                console.log(`idk: ${idk}, number: ${number}`);
            }
        });
    } catch (error) {
        console.error("404");
    }
}


for (let i = 2000; i < 3000; i++){
    main(number, i);
}