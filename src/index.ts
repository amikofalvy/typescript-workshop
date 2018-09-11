import { Vector } from './Vector';
import { Shape } from './Shape';
import { Triangle } from './Triangle';
import { Square } from './Square';

console.log('Hello HackMIT!');

/// Basic example of Typescript class usage
const v1 = new Vector(1, 0);
const v2 = new Vector(0, 1);
const resultingVector = v1.add(v2);
console.log('The result of adding Vector 1 and Vector 2 is:', resultingVector);

/// Example of Polymorphism
const shapes: Shape[] = [new Triangle(1, 1), new Square(1, 1)];

shapes.forEach(s => console.log(`${s.name}'s area: ${s.area()}.`));