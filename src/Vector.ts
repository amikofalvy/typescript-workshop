export class Vector {
    private dx;
    private dy;

    constructor (dx: number, dy: number) {
        this.dx = dx;
        this.dy = dy;
    }

    public add(v2: Vector): Vector {
        return new Vector(this.dx + v2.dx, this.dy + v2.dy);
    };
}