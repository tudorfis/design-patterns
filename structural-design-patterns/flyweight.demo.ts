import { PointService } from "./flyweight-demo/PointService";

const pointsService = new PointService();
const points = pointsService.getPoints();

console.log(`Points: `, points);
console.log(`pointIcon[0] === point[1] : `, points[0].getIcon() == points[1].getIcon());
console.log(`pointIcon[1] === point[2] : `, points[1].getIcon() == points[2].getIcon());
console.log(`pointIcon[0] === point[2] : `, points[0].getIcon() == points[2].getIcon());
console.log(`pointIcon[2] === point[3] : `, points[2].getIcon() == points[3].getIcon());
console.log(`pointIcon[3] === point[4] : `, points[3].getIcon() == points[4].getIcon());


// Exercise

// We are building an app to show multiple points on the map, however
// if we render in memory each icon image, then we will most likely crash
// the app if we have 1,000 points. The solution is to implement a single icon
// for each type and just refference that, or create it when need it
// Implement the flyweight pattern for this application