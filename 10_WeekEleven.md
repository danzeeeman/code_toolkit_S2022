# Week 11 - APIs

## JSON REVIEW

flowers.json
```
{
  "name": "sunflower",
  "r": 255,
  "g": 200,
  "b": 0
}
```

birds.json
```
{
  "description": "Birds of Antarctica, grouped by family",
  "source": "https://en.wikipedia.org/wiki/List_of_birds_of_Antarctica",
  "birds": [
    {
      "family": "Albatrosses",
      "members": [
        "Wandering albatross",
        "Grey-headed albatross",
        "Black-browed albatross",
        "Sooty albatross",
        "Light-mantled albatross"
      ]
    },
    {
      "family": "Cormorants",
      "members": [
        "Antarctic shag",
        "Imperial shag",
        "Crozet shag"
      ]
    },
    {
      "family": "Diving petrels",
      "members": [
        "South Georgia diving petrel",
        "Common diving petrel"
      ]
    },
    {
      "family": "Ducks, geese and swans",
      "members": [
        "Yellow-billed pintail"
      ]
    },
    {
      "family": "Gulls",
      "members": [
        "Kelp gull"
      ]
    },
    {
      "family": "Penguins",
      "members": [
        "King penguin",
        "Emperor penguin",
        "Gentoo penguin",
        "Adelie penguin",
        "Chinstrap penguin",
        "Rockhopper penguin",
        "Macaroni penguin"
      ]
    },
    {
      "family": "Shearwaters and petrels",
      "members": [
        "Antarctic giant petrel",
        "Hall's giant petrel",
        "Southern fulmar",
        "Antarctic petrel",
        "Cape petrel",
        "Snow petrel",
        "Great-winged petrel",
        "White-headed petrel",
        "Blue petrel",
        "Broad-billed prion",
        "Salvin's prion",
        "Antarctic prion",
        "Slender-billed prion",
        "Fairy prion",
        "Grey petrel",
        "White-chinned petrel",
        "Kerguelen petrel",
        "Sooty shearwater"
      ]
    },
    {
      "family": "Sheathbills",
      "members": [
        "Snowy sheathbill"
      ]
    },
    {
      "family": "Skuas and jaegers",
      "members": [
        "South polar skua",
        "Brown skua"
      ]
    },
    {
      "family": "Storm petrels",
      "members": [
        "Grey-backed storm petrel",
        "Wilson's storm petrel",
        "Black-bellied storm petrel"
      ]
    },
    {
      "family": "Terns",
      "members": [
        "Arctic tern",
        "Antarctic tern"
      ]
    }
  ]
}
```

```
/* 
https://vimeo.com/144162099
JSON Formatter & Validator (referred at 08:11) https://jsonformatter.curiousconcept.com/
(Shiffman tries to sing @ 11:24)
*/

let flower;

function preload() {
  flower = loadJSON('flower.json');
}

function setup() {
  createCanvas(400, 400);

  // flower = {
  //   name: "sunflower",
  //   col: color(200, 220, 0)
  // }
}

function draw() {
  background(0);
  fill(flower.r, flower.g, flower.b);
  text(flower.name, 10, 50);
}
```

```
/* https://vimeo.com/144162102
JSON source (5:05) https://github.com/dariusk/corpora/blob/master/data/animals/birds_antarctica.json
Video referenced (9:05)"createP from DOM" https://vimeo.com/142698165 */

let data;

function preload() {
  data = loadJSON('birds.json');
}

function setup() {
  //createCanvas(400, 400);
  //let bird = data.birds[1].members[2];
  //createP[bird];

  let birds = data.birds;

  for (let i = 0; i < birds.length; i++) {
    createElement('h1', birds[i].family);
    let members = birds[i].members;
    for (let j = 0; j < members.length; j++) {
      createDiv(members[j]);
    }
  }
}
```

## Loading JSON from a URL

```
let x = 0;

let spaceData;

function setup() {
  createCanvas(200, 200);
  loadJSON('http://api.open-notify.org/astros.json', gotData, 'jsonp');
}

function gotData(data) {
  spaceData = data;
}

function draw() {
  background(0);

  if (spaceData) {
    randomSeed(4);
    for (let i = 0; i < spaceData.number; i++) {
      fill(255);
      ellipse(random(width), random(height), 16, 16);
    }
  }

  stroke(255);
  line(x, 0, x, height);
  x = x + 1;
  if (x > width) {
    x = 0;
  }
}

```

## Using an API

```
let weather;

function setup() {
  createCanvas(400, 200);
  loadJSON(
    'https://api.openweathermap.org/data/2.5/weather?q=London&APPID=001b0f58045147663b1ea518d34d88b4',
    gotData
  );
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(0);
  if (weather) {
    fill(255);
    ellipse(100, 100, weather.main.temp, weather.main.temp);
    ellipse(300, 100, weather.main.humidity, weather.main.humidity);
  }
}

```

```
let weather;
let millisecond;
function setup() {
  createCanvas(512, 512);
  // 40.7369919,-73.9921866
  loadJSON(
    'https://api.openweathermap.org/data/2.5/weather?lat=-73.9921866&lon=40.7369919&appid=001b0f58045147663b1ea518d34d88b4',
    gotData
  );
  angleMode(DEGREES);
  rectMode(CENTER);
  millisecond = millis();
}

function gotData(data) {
  weather = data;
  print(weather)
}

function draw() {
  background(0);
  if (weather) {
    
    push();
    translate(width/2, height/2);
    rotate(weather.wind.deg)
    fill(255);
    rect(0, 0, 5, weather.wind.speed);
    pop();
  }
  
  if(millis() - millisecond > 10000){
      loadJSON(
    'https://api.openweathermap.org/data/2.5/weather?lat=-73.9921866&lon=40.7369919&appid=001b0f58045147663b1ea518d34d88b4',
    gotData
  );
  }
}
```


## User Input

```
let weather;

let api = 'https://api.openweathermap.org/data/2.5/weather?q=';
let apiKey = '&APPID=001b0f58045147663b1ea518d34d88b4';
let units = '&units=metric';

let input;

function setup() {
  createCanvas(400, 200);

  let button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() {
  let url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(0);
  if (weather) {
    let temp = weather.main.temp;
    let humidity = weather.main.humidity;
    ellipse(100, 100, temp, temp);
    ellipse(300, 100, humidity, humidity);
  }
}

```

## API Query with setTimeInterval

```
var lineX = 0;
var url = 'http://api.open-notify.org/iss-now.json';

var issX = 0;
var issY = 0;

function setup() {
  createCanvas(600, 400);

  setInterval(askISS, 1000);
}

function askISS() {
  loadJSON(url, gotData, 'jsonp');
}

function gotData(data) {
  var lat = data.iss_position.latitude;
  var long = data.iss_position.longitude;
  issX = map(lat, -90, 90, 0, width);
  issY = map(long, -180, 180, 0, height);
}

function draw() {
  background(51);

  fill(255);
  ellipse(issX, issY, 24, 24);

  stroke(255);
  line(lineX, 0, lineX, height);
  lineX = lineX + 5;
  if (lineX > width) {
    lineX = 0;
  }
}
```
## Wordnik API

```
var url1 = 'https://api.wordnik.com/v4/word.json/';
var word = 'rainbow';
var url2 =
  '/relatedWords?useCanonical=false&limitPerRelationshopType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

var link;
function setup() {
  noCanvas();
  link = createA('#', word);
  link.mousePressed(askWordnik);
}

function askWordnik() {
  loadJSON(url1 + word + url2, gotData);
}

function gotData(data) {
  var index1 = floor(random(0, data.length));
  var index2 = floor(random(0, data[index1].words.length));
  word = data[index1].words[index2];
  link.html(word);
}
```

## NYT API

```
var url =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=rainbow&api-key=99cfea65a5bb30650b3d31eb1713233e:15:73386102';

function setup() {
  noCanvas();
  loadJSON(url, gotData);
}

function gotData(data) {
  var articles = data.response.docs;

  for (var i = 0; i < articles.length; i++) {
    createElement('h1', articles[i].headline.main);
    createP(articles[i].snippet);
  }

  //println(data.response.docs[0].headline.main);
}
```

## Gifphy API

```
var api = 'https://api.giphy.com/v1/gifs/search?';
var apiKey = '&api_key=dc6zaTOxFJmzC';
var query = '&q=rainbow';

function setup() {
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }
}
```
### Home Work
* Paul Dourish, “Protocols, Packets, and Proximity: The Materiality of Internet Routing”, from Signal Traffic: Critical Studies of Media Infrastructures, Nicole Starosielski and Lisa Parks, eds.
* https://moxie.org/2022/01/07/web3-first-impressions.html
