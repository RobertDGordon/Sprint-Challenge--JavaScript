// 1. Copy and paste your prototype in here and refactor into class syntax.
class Cuboid{
    constructor(att){
        this.length = att.length;
        this.width = att.width;
        this.height = att.height;
    }
    volume (){return this.length * this.width * this.height};
    surfaceArea (){return 2*(this.length * this.width + this.length * this.height + this.width * this.height)};
  }

const testcuboid = new Cuboid({
    length: 4,
    width: 5,
    height: 5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(testcuboid.volume()); // 100
console.log(testcuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends Cuboid{
    constructor (att){
        super (att);
    }
    volume () {return this.length * this.length * this.length};
    surfaceArea () {return 6 * (this.length * this.length)};
}
const testcube = new CubeMaker({
    length: 4,
    width: 4,
    height: 4
});

console.log(testcube.volume()); //64
console.log(testcube.surfaceArea()); //96