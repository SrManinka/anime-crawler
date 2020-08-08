var request = require('request-promise')
var cheerio = require('cheerio')
var fs = require('fs');


//generates a txt file
function textFile(animes) {
    let text
    animes.forEach(anime => {
        text += anime + '\n'
    })

    fs.writeFile("./anime-list.txt", text, function (err) {
        if (err) {
            console.log(err);
        }
    });

    console.log('file created')
}

//generates a json file
function jsonFile(animes) {
    let text = '[\n'

    animes.forEach(anime => {
        text += ' {\n  "name": "' + anime + '"\n },\n'
    })

    text = text.substring(0, text.length - 2)
    text += '\n]'

    fs.writeFile("./anime-list.json", text, function (err) {
        if (err) {
            console.log(err);
        }
    });

    console.log('file created')
}

//gets the info from the url
function requestInfo(url, func, func2) {
    var list = []
    return new Promise(() => {
        request(url, function (err, res, body) {
            if (err) console.log('erro:' + err);
            var $ = cheerio.load(body);
            $('div[id ="content-zone"] div > table>tbody>tr').each(function () {
                var title = $(this).find('td>a').text().trim();
                title = title.replace(/"/g, '')
                if (title.length > 1)
                    list.push(title)
            })
        }).then(() => {

            console.log(list.length + " animes/mangas found")
            if (func)
                func(list)
            if (func2 && func2 != func)
                func2(list)
        })
    })
}

//you may replace it with another 'animenewsnetwork encyclopedia' url
const url = 'https://www.animenewsnetwork.com/encyclopedia/anime-list.php?limit_to=&showT=1&showM=1&showO=1&showG=1&showN=1&licensed=&sort=title'

//generates a text file
//requestInfo(url,textFile)
//generates json file
//requestInfo(url,jsonFile)
//generates both
requestInfo(url, textFile, jsonFile)
