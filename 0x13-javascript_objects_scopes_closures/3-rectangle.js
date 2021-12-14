#!/usr/bin/node
class Rectangle {
  constructor(w, h){
    if (w > 0 && h > 0) [this.width, this.height] = [w, h];
  }
  print() {
    for (let i = 0; i < this.height; i++) {
       let rowX = '';
       for (let i = 0; i < this.width; i++) rowX += 'x';
       console.log(rowX);
    }
  }
};
module.exports = Rectangle;
