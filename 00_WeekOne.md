# __CODE TOOLKIT SPRING 2022__
# Week One Lecture Notes
### ___Technology as a Medium___
- SAAS, Software as a Service
- Bank Software aka B2B
- Advertising and _how they track you_ 
- Bots, Botnets, and Hacking for Fun and Profit
- Interactivity & Arting, with a Computer
- ## Computing, Outside of ___Computer Science___
### _Poetic Computing_
* Madeline Gannon, [*Mimus*](https://atonaton.com/mimus/)
* Design I/O, [*Mimic*](https://www.design-io.com/projects/mimic) & [*Connected Worlds*](https://www.design-io.com/projects/connectedworlds)
* Golan Levin, [*Ghost Pole Propagator I*](http://flong.com/archive/projects/gpp/index.html) & [*Ghost Pole Propagator II*](http://flong.com/archive/projects/gpp-ii/index.html)
* Kyle McDonald and Jonas Jongejan, [*Light Leaks*](https://vimeo.com/66167082)
### _Social Justice, Protests, Hacktivism, Jouralism, and Critical Hot Takes_ ___but also ART___
* Sam Lavigne, [Database of ICE employee LinkedIn accounts](https://www.theverge.com/2018/6/19/17480912/github-ice-linkedin-scraping-employees)
* The Markup, [COVID in Amazon Warehouses](https://github.com/the-markup/investigation-amazon-covid)
* Kyle McDonald, [Ethereum Emissions: A Bottom-up Estimate](https://kylemcdonald.github.io/ethereum-emissions/)
* Adam Harvey [CV Dazzle](https://cvdazzle.com)  
* The Critical Engineering Working Group [The Deep Sweep](https://criticalengineering.org/projects/deep-sweep/)
* Julian Oliver [Stealth Cell Tower](https://julianoliver.com/output/stealth-cell-tower.html)
## In-class Assignment: ___A crash course to git___
- Create a [Github](https://github.com) profile and link it to the P5js [Editor](https://editor.p5js.org) 
- Fork this Repo
  - Click the fork button
- Install [git](https://git-scm.com) 
- on Windows open git-bash
  - IMAGE
- on Mac open terminal
  - IMAGE
- Clone your fork Repo to your home directory
```
git clone your_repo_url
```
Cloning a repository of code is basically making a copy but with 
- Copy the _template_ folder and rename it to your chosen name
```
git add --all
git commit -a -m "adding my homework folder where I will store all of my homework"
git push origin main
```
## __5-10 min break__
# Introductory Beep Boops 
### How we Work: The P5js Development Environment ("PDE")
We are going to read a lot of code this semester and we are going to code things together in class as a class.  I will prep examples and they will be hosted on the p5js editor or in the examples folder.

Download [Processing](https://processing.org/download)

- Install P5js Mode

![mode](images/Screen%20Shot%202022-01-21%20at%205.00.53%20PM.png)
![add mode](iamges/../images/Screen%20Shot%202022-01-21%20at%205.01.01%20PM.png)
![install p5js](images/Screen%20Shot%202022-01-21%20at%205.01.05%20PM.png)

Let's look around:
- play button
- stop button
- File > Open
- File > Examples

___If I am ever going to fast or you have any questions please interrupt me and ask a question___
## Hello World
- [Hello World](https://editor.p5js.org/danzeeeman/sketches/yyrHi9CAJ)

## Drawing with numbers
- [Hello Shapes](https://editor.p5js.org/danzeeeman/sketches/l21Ut52K6)

```rect(x, y, width, height)```
```
createCanvas(512, 512);
fill(255, 0, 255);
rect(0, 0, 512, 512);
```

```ellipse(x, y, width, height)```
```
createCanvas(512, 512);
fill(255, 0, 255);
ellipse(0, 0, 512, 512);
```

```triangle(x1, y1, x2, y2, x3, y3)```
```
createCanvas(512, 512);
fill(255, 0, 255);
triangle(0, 0, 256, 512, 512, 0);
```

Lets look at ```fill(r, g, b)```

```
fill(255, 0, 255);
```

Lets look at ```stroke(r, g, b)```
```
stroke(255, 255, 0);
```

```
createCanvas(512, 512)
fill(255, 0, 255);
stroke(255, 255, 0);
rect(0, 0, 256, 256);
rect(256, 256, 256, 256);

fill(255, 255, 0);
stroke(255, 0, 255);
rect(0, 256, 256, 256);
rect(256, 0, 256, 256);
```


## The Screen is a Grid
- [Hello Grid](https://editor.p5js.org/danzeeeman/sketches/aiCnAxqRZ)
![Images](images/grid.png)
```
function setup(){
  createCanvas(512, 512);
  fill(255, 255, 0);
  stroke(255, 0, 255);
  rect(0, 0, 512, 512);
}
```

```
function setup(){
  createCanvas(512, 512);
  fill(255, 255, 0);
  stroke(255, 0, 255);
  rect(100, 100, 200, 200);
}
```

```
function setup(){
  createCanvas(512, 512);
  fill(255, 255, 0);
  stroke(255, 0, 255);
  rect(0, 0, 100, 100);
  rect(100, 0, 100, 100);
}
```

```
function setup(){
  createCanvas(500, 500);
  noStroke()  

  fill(255, 255, 0);
  rect(0, 0, 250, 250);
  
  fill(255, 0, 255);
  rect(250, 0, 250, 250);
  
  fill(255, 255, 0);
  rect(250, 250, 250, 250);
  
  fill(255, 0, 255);
  rect(0, 250, 250, 250);
}
```

## [Examples](https://p5js.org/examples/)

## Loading Images 
```
let img;
function preload() {
  img = loadImage('assets/laDefense.jpg');
}
function setup() {
  image(img, 0, 0);
}
```
### Home Work
* Read Marshall McLuhan's [The Medium is the Message](pdfs/mcluhan.mediummessage.pdf)
* _Extra Credit Readings & Watching_ 
  * The Critical Engineering Working Group's [THE CRITICAL ENGINEERING MANIFESTO](https://criticalengineering.org) [pdf](https://criticalengineering.org/ce.pdf)
  * Watch Zach Lieberman's talk at EYE0 2012 * https://vimeo.com/47203759?t=38m22s
  * Read Casey Reas et al. [{Sofrware} Structures](https://artport.whitney.org/commissions/softwarestructures/text.html#structure)

