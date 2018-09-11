export abstract class Shape {
    abstract name: string;
    sides: number;
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    /** Returns the area of the shape */
    abstract area(): number;
}