/**
 * Generic 함수에서 사용하기
 */

function whatValue(value: any) {
    return value;
}

const value = whatValue('test');

function genericWhatValue<T>(value: T): T {
    return value;
}

const genericResult1 = genericWhatValue<number>(123);

let genericResult2 = genericWhatValue('123')

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
    return {
        x,
        y,
        z,
    }
}

const multipleGenericResult = multipleGenerics<number, boolean, string>(
    123,
    true,
    '123',
);

const multipleGenericResult2 = multipleGenerics(
    123,
    true,
    '123',
);

function getTuple<X, Y>(val1: X, val2: Y) {
    return [val1, val2] as const;
}

const tuple = getTuple(true, 100);

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    brand: string;
    codeName: string;

    constructor(brand: string, codeName: string) {
        this.brand = brand;
        this.codeName = codeName;
    }
}

function instantiator<T extends { new(...args: any[]): {} }>(constructor: T,
    ...args: any[]) {
    return new constructor(...args);
}

console.log(instantiator(Idol, '아이유', 23));
console.log(instantiator(Car, 'BMW', 1111));