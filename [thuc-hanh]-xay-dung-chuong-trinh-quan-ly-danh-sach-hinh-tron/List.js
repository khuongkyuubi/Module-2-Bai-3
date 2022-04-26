"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var circleList = [];
circleList.push(new Circle_1.Circle("yellow", 10));
circleList.push(new Circle_1.Circle("green", 15));
circleList.push(new Circle_1.Circle("blue", 20));
// function showCircle(circle: Circle) {
//     console.log("Hình tròn này có màu " + circle.color + " và bán kính là " + circle.radius);
// }
circleList.forEach(function (circle) {
    console.log("Hình tròn này có màu " + circle.color + " và bán kính là " + circle.radius);
});
