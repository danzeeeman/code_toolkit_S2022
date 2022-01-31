# Week 2 – Adding variance
* Variables
* Arithmetic (+, -, *, /, %)
* Introduction to ```random()```
* Loading Images
## Review of what we've done so far
```
// the setup function gets called to kick everything off
function setup() {
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
### Drawing with numbers
- [Hello Shapes](https://editor.p5js.org/danzeeeman/sketches/l21Ut52K6)
### The Screen is a Grid
- [Hello Grid](https://editor.p5js.org/danzeeeman/sketches/aiCnAxqRZ)

## Variables    
### What is a variable?  
  
- A way to introduce variation on a theme, generalization within a formal structure, or the abstraction of some parts of a process. The word comes from vary like variety and variance, and means a thing that is able to change.
- A variable is a placeholder. A placeholder for a value. Instead of using a specific value (like a number), you create a name, and then use that name in your code. When looking at your code, you don't know exactly what the value of that variable is. You can set it to a specific value, or change that value later. This means that one bit of code is now able to do different things.
- A variable is a way to store something in memory so you can access it later in your code.
#### _Who remembers algebra?_
  ```
  y = m * x + b aka the formula for a line
  ```

```Y``` is equal to the variable ```M``` times the variable ```X``` plus the variable ```B``` this gives us the forumla of a line where ```M``` defines the slope of the line and ```B``` define the point that the line crosses the ```Y``` axis, when ```x = 0```.

  ```
  a**2 + b**2 = c**2 aka Pythagorean Theorem
  ```
#### _Did anyone take Physics?_
  ```
  force = mass * acceleration 
  ```
####  _Did anyone take Calculus?_


So lets talk about how you create a variable in code. The word for that is _declare_. 

This is how you _declare_ a variable in p5.js.

```
let x;
```

Before you can use a variable you have to assign it a value.

This is how you _assign_ a variable in p5.js.
```
let x; 
x = 10;

or 

let x = 10;
```

There are three places where you can _declare_ a variable

- Inside a _function_ or a _code block_ which is called _local variables_

```
function setup()
{ 
    let x;
    print(x)
}
```

- In the definition of function parameters which is called _parameters_
```
function setup()
{
    print(getValue(100));
} 

function getValue(t)
{
    return t*0.01;
} 
```

- Outside of all _functions_ which is called _global variables_
```
let x;
function setup()
{
    print(x);
}
```
### Variable Names 
* must start with a letter or an underscore character
* cannot start with a number
* can only contain alpha-numeric characters and underscores (A-Z, a-z, 0-9, and _)
* are case-sensitive (treeheight, TREEHEIGHT, TreeHeight, and treeHeight are all different variables)

![Matrix](images/matrix_var_names.jpg)

My advice is 

```
camelCase
let makeItEasyToRead = 1;

snake_case
let make_it_easy_to_read = 1;

camelCase
let makeItMeanSomethingUnique = 1;

snake_case
let make_it_mean_something_unique = 1;
```

You can store multiple types of data as a variable.
- strings ```"Yo Some Words"```
- floats ```0.01f```
- integers  ```5```
- booleans ```True/False```  
- and more complex data types (we'll get to that much later on in the course)

lets look at some [code](https://editor.p5js.org/danzeeeman/sketches/kAGXxWYRf)


### Tweaking Things Is Essential 
![tweaking](images/changing-stuff.jpeg)

## Arithmetic
![basic_math](images/1zp2du.jpg)
### basic math and some __funky__ _shit_
* add (+)
  * 1 + 1 = 2
  * 1++ = 2
* subtract (-)
  * 1 - 1 = 0
  * 1-- = 0
* multiply (*)
  * 2*2 = 4
  * 4*4 = 16
* divide (/)
  * 2/2 = 1
  * 1 / 2 = 0.5
* pow (**)
  * 2**2 = 4
  * 3**4 = 81 
* modulus (%) 
  ![wft](images/1y62g6.jpg) 
  *  1 % 4 = 1
  *  2 % 4 = 2
  *  3 % 4 = 3
  *  4 % 4 = 0
  *  5 % 4 = 1
  *  6 % 4 = 2
  
  ## ```random()```
  ```
    let r = random(50);
    stroke(r * 5);
    line(50, height/2, 50 + r, 0);
  ```

One thing that works really nicely with variables is creating randomized variation of those variable values.  In p5.js, this is done with the function ```random()```. ```random()``` returns a floating point (a number with a decimal point).
Like this:
```
	  firstSquareHeight = random(10,300)
```
The parameters to ```random()``` are minimum and maximum values. They define a range from which ```random()``` chooses a number. Like asking a person to "pick a number between 10 and 300".

Here is how we could use random values to draw the above composition:

```
  squareWidth = random(10,300) # variable assignment (creates the variable)
  firstSquareHeight = random(10,300)

  size(600, 600)
  background(255)
  stroke(100, 100, 100)

  fill(255, 100, 100, 100)
  rect(250, 100, squareWidth, firstSquareHeight)

  fill(255, 255, 100, 100)
  rect(250, 100 + firstSquareHeight, squareWidth, 100)

  fill(100, 100, 255, 100)
  rect(250, 100 + firstSquareHeight + 100, squareWidth, 100)
```
Stop and run that a few times to see what kinds of variation we've just created.

  [Random Sketch](https://editor.p5js.org/danzeeeman/sketches/poHo3Q87_)

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


# More Draw Functions
### We've looked at these
- triangle()
- rect()
- ellipse()

## New Draw Functions
### arc()
```
arc(x, y, w, h, start, stop, [mode], [detail])
```
- x Number: x-coordinate of the arc's ellipse
- y Number: y-coordinate of the arc's ellipse
- w Number: width of the arc's ellipse by default
- h Number: height of the arc's ellipse by default
- start Number: angle to start the arc, specified in radians
- stop Number: angle to stop the arc, specified in radians
- mode Constant: optional parameter to determine the way of drawing the arc. either CHORD, PIE or OPEN (Optional)
- detail Integer: optional parameter for WebGL mode only. This is to specify the number of vertices that makes up the perimeter of the arc. Default value is 25. Won't draw a stroke for a detail of more than 50. (Optional)

### circle()
```
circle(x, y, diameter);
```
- x Number: x-coordinate of the centre of the circle.
- y Number: y-coordinate of the centre of the circle.
- d Number: diameter of the circle.

### line()
```
line(x1, y1, x2, y2);
```
- x1 Number: the x-coordinate of the first point
- y1 Number: the y-coordinate of the first point
- x2 Number: the x-coordinate of the second point
- y2 Number: the y-coordinate of the second point

### point()
```
point(x, y);
```
- x Number: the x-coordinate
- y Number: the y-coordinate
### quad()
```
quad(x1, y1, x2, y2, x3, y3, x4, y4, [detailX], [detailY]);
```
- x1 Number: the x-coordinate of the first point
- y1 Number: the y-coordinate of the first point
- x2 Number: the x-coordinate of the second point
- y2 Number: the y-coordinate of the second point
- x3 Number: the x-coordinate of the third point
- y3 Number: the y-coordinate of the third point
- x4 Number: the x-coordinate of the fourth point
- y4 Number: the y-coordinate of the fourth point
- detailX Integer: number of segments in the x-direction (Optional)
- detailY Integer: number of segments in the y-direction (Optional)

### square()
```
square(x, y, s, [tl], [tr], [br], [bl])
```
- x Number: x-coordinate of the square.
- y Number: y-coordinate of the square.
- s Number: side size of the square.
- tl Number: optional radius of top-left corner. (Optional)
- tr Number: optional radius of top-right corner. (Optional)
- br Number: optional radius of bottom-right corner. (Optional)
- bl Number: optional radius of bottom-left corner. (Optional)

## Homework
* Read Lev Manovich's [The Language of New Media, Cambridge, MA: MIT Press, 2002. Chapter 1 (pages 18-55)](https://dss-edit.com/plu/Manovich-Lev_The_Language_of_the_New_Media.pdf)
  * For the PDF Page 18 of the book is really 29
* Coding Assignment #1 __Solve LeWitt's Trapezoid__ 
![Trapezoid](images/lewitt-trapezoid.jpeg)


