# Week 7 – Working with many things (lists), and modularity (functions)

## Data structures: Lists, Maps

### Lists

```
let _list = [0, 1, 2, 3, 4, 5];
```

Iterating over a list
```
let _list = [0, 1, 2, 3, 4, 5];
for(let i = 0 ; i < _list.length; i++){
  print(_list[i])
}
```

### Maps

```
let _map = {"key":"value"};
```
## functions() 

Functions allow you to break up your code into nice reusable little blocks.  

We've seen functions before

```
// the  function that gets called when the page loads
function setup(){

}

function draw(){

}
```
* ```yourOwnFunctions(p1, p2, p3)```

  ```
  function  yourOwnFunctions(p1, p2, p3){
    return ((p1*p2)+p3)/p2
  }
  ```
* ```yourOwnFunction(parameters)```

  ```
  function  yourOwnFunctions(p){
    return ((p.p1*p.p2)+p.p3)/p.p2
  }
  ```
## Data Structures and Data Visualization

## CSV and JSON
## Home Work
* Coding Assignment #6: Data Self-Portrait 