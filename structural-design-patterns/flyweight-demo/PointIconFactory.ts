import { PointIcon } from "./PointIcon";
import { PointType } from "./PointType";

export class PointIconFactory {
    private pointIcons: PointIcon[] = [];

    getPointIcon(type: PointType): PointIcon {
        // for testing purposes, I've created a new PointIcon no matter the type
        // return new PointIcon(type, null);

        const filterPointIcon = this.pointIcons.filter(pi => pi.getType() === type)[0];
        if (!filterPointIcon) {
            const icon = new PointIcon(type, null);
            this.pointIcons.push(icon);
            return icon;
        }
        return filterPointIcon
    }
}