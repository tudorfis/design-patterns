import { PointIconFactory } from "./PointIconFactory";
import { Point } from "./Point";
import { PointType } from "./PointType";

export class PointService {
    private pointIconFactory = new PointIconFactory();

    getPoints(): Point[] {
        let points = [];
        points.push(new Point(13, 2, this.pointIconFactory.getPointIcon(PointType.HOSPITAL)))
        points.push(new Point(10, 1, this.pointIconFactory.getPointIcon(PointType.HOSPITAL)))
        points.push(new Point(11, 2, this.pointIconFactory.getPointIcon(PointType.HOSPITAL)))
        points.push(new Point(4, 8, this.pointIconFactory.getPointIcon(PointType.CAFE)))
        points.push(new Point(3, 9, this.pointIconFactory.getPointIcon(PointType.RESTAURANT)))
        return points;
    }

}