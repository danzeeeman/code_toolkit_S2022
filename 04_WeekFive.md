## Week 5 – Adding repetition
* Loops
## for() loops
You've seen a for loop before in some examples but we will look at them more today.

```
let some_number = 10;
for(let i = 0; i < some_number; i++){
    drawShape(i);
}
```

_So what does this tell the computer to do?_

### Nested for() loops
```
let some_number = 10;
for(let i = 0; i < some_number; i++){
    for(let j = 0; j < some_number; j++){
        drawShape(i, j);
    }
}
```
_So what does this tell the computer to do?_

### Comparing everything to everything else
```
let some_number = 10;
let list = [10, 9, 12, 25, 14, 4, 6, 10];
for(let i = 0; i < list.length; i++){
    for(let j = i; j < list.length; j++){
        compare(list[i], list[j])
    }
}
```
_So what does this tell the computer to do?_

_where is this useful?_ 
 * collision detection algorithms
 * particle systems repulsion algorithms 
 * map making
 * distance checking
 * #Stonks

* Easing
* So what is an ___NFTs___ really?
### Home Work
  * Coding Assignment #4.a: Create a Endless animation using primitives: Circle, Square, Rectangle, Triangles
  * Coding Assignment #4.b: Create a Endless animation using found objects   
      * MEMEs will be judged by their Dankness
