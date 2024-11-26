var bird={
    canfly: true,
    haveWings: true,
    HasFeathers: true
}
//objects 
var eagle1= Object.create(bird);
console.log("eagle1",eagle1);

console.log("can fly" ,eagle1.canfly)
console.log("have wings",eagle1.haveWings)
console.log("has feathers",eagle1.HasFeathers)

var eagle2 = Object.create(bird);
console.log("eagle has wings",eagle2.haveWings)

var penguin1 = Object.create(bird);
penguin1.canfly=false;
console.log("penguin", penguin1)