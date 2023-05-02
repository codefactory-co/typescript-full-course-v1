/**
 * Interface
 */
interface Animal {
    name: string;
    age: number;
    jump(): string;
}

class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    dance() {

    }
}

let ori: any = new Dog('오리', 3);

function instanceOfAnimal(object: any): object is Animal {
    return 'jump' in object;
}

if (instanceOfAnimal(ori)) {
    ori;
}

/**
 * 다중 인터페이스 구현
 */
interface Pet {
    legsCount: number;
    bark(): void
}

class Cat implements Animal, Pet {
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Aniaml
    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    // Pet
    bark(): void {
        console.log('냐옹');
    }
}

type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Aniaml
    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    // Pet
    bark(): void {
        console.log('냐옹');
    }
}

interface WrongInterface1 {
    name: string | number;
}

interface WrongInterface2 {
    name: number;
}

// class Person implements WrongInterface1, WrongInterface2{
// name: number;
// name: number | string;
// }

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

interface IdolConstructor {
    new(name: string, age: number): Idol;
}

function createIdol(constructor: IdolConstructor, name: string, age: number) {
    // return new Idol(name, age);
    return new constructor(name, age);
}

console.log(createIdol(Idol, '아이유', 32));