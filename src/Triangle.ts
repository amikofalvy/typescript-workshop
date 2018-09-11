import { Shape } from './Shape';

export class Triangle extends Shape {
    constructor (width: number, height: number) {
        super(width, height);
        this.sides = 3;
    }

    name = 'Triangle'

    public area (): number {
        return 0.5 * this.height * this.width;
    }
}