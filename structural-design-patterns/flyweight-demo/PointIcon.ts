import { PointType } from "./PointType";

export class PointIcon {
    constructor(
        private readonly type: PointType,
        private readonly icon: number[]
    ) { }

    getType(): PointType {
        return this.type;
    }
}