# Week 2 – Adding variance
* Who remembers algebra?
* Did anyone take Calculus?
* Did anyone take Physics?
## Variables    
A variable is a way to store something in memory so you can access it later in your code. 

This is how you _declare_ a variable in p5.js.

```
let x;
```

There are three places where you can _declare_ a variable

- Inside a function or a block which is called _local variables_
- In the definition of function parameters which is called _parameters_
- Outside of all functions which is called _global variables_

local variable
```
    function setup()
    { 
        let x = 10;
    }
```
function parameters
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
global variable
```
    let x = 10;
    function setup()
    {
        let y = x*10;
        print(y);
    }
```

![Matrix](images/matrix_var_names.jpg)

My advice is 

```let makeItEasyToRead = 1;```

```let make_it_easy_to_read = 1;```

```let makeItMeanSomethingUnique = 1;```

```let make_it_mean_something_unique = 1;```

lets look at some [code](https://editor.p5js.org/danzeeeman/sketches/QR1NPe1TI)

## Arithmetic
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
  ![meg](images/modulus-is-underrated-68348281.png)
  *  1 % 2 = 1
  *  2 % 2 = 0
  *  2 % 4 = 2
  *  4 % 4 = 0
  *  3 % 4 = 3
  *  16 % 4 = 0
## functions() and methods()
* translate(x, y)
* rotate(Radians)
* scale(x, y)
* yourOwnFunctions(parameter1, parameter2, paramter3)
* yourOwnFunction(parameters)
![global_meme](images/you-dont-ever-have-to-pass-parameters-if-every-variable-66493518.png)

# Homework
* Read Lev Manovich's [The Language of New Media, Cambridge, MA: MIT Press, 2002. Chapter 1 (pages 18-55)](pdfs/Manovich-Lev_The_Language_of_the_New_Media.pdf)
* Coding Assignment #1 __Solve LeWitt's Trapezoid__ 
![Trapezoid](images/lewitt-trapezoid.jpeg)
