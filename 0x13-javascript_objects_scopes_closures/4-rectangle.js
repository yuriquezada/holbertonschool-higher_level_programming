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
  rotate() {
    [this.width, this.height] = [this.height, this.width];
  }
  double() {
    [this.width, this.height] = [this.width * 2, this.height * 2];
  }
};
module.exports = Rectangle;
