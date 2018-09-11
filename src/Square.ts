import { Shape } from './Shape';

export class Square extends Shape {
    constructor (width: number, height: number) {
        super(width, height);
        this.sides = 4;
    }

    name = 'Square'

    public area (): number {
        return this.height * this.width;
    }
}