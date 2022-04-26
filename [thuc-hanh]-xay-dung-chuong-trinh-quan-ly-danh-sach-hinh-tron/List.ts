import {Circle} from "./Circle";
let circleList : Circle[] = [];

circleList.push(new Circle("yellow", 10));
circleList.push(new Circle("green", 15));
circleList.push(new Circle("blue", 20));

// function showCircle(circle: Circle) {
//     console.log("Hình tròn này có màu " + circle.color + " và bán kính là " + circle.radius);
// }

circleList.forEach((circle: Circle) => {
    console.log("Hình tròn này có màu " + circle.color + " và bán kính là " + circle.radius);
});