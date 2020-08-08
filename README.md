[![license](https://img.shields.io/github/license/soruly/anilist-crawler.svg)](https://raw.githubusercontent.com/soruly/anilist-crawler/master/LICENSE)
# Anime Crawler

get all animes' and mangas' names from 'www.animenewsnetwork.com' and makes a txt or json file

## Requirements

- Node.js

## Usage

first, make a new search, with your own specificcation, at [animenewsnetwork site](https://www.animenewsnetwork.com/encyclopedia/anime-list.php?alttitles=1&limit_to=&showT=1&showM=1&showO=1&showG=1&showN=1&licensed=&sort=title), copy the url and paste it in url const

```javascript
const url ='https://www.animenewsnetwork.com/encyclopedia/anime-list.php?alttitles=1&limit_to=&showT=1...'
```
uncoment one of the requestInfo lines depending on what you want
```
//generates a text file
//requestInfo(url,textFile)
//generates json file
//requestInfo(url,jsonFile)
//generates both
//requestInfo(url, textFile, jsonFile)
 ```
run the command
```
npm install -save
```
then
```
npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Note

- if you want any help, you may send me a message on [facebook](https://www.facebook.com/gabriel.batistaalmeida.5/) 
