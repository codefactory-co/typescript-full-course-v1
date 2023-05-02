/**
 * Property Initialization
 */
class Person {
    // 일반적인 필수값 선언법
    name: string;
    // 초기값 제공 선언법
    age: number = 23;
    // optional 값 선언법
    pet?: string;
    // type of undefined 선언법
    petAge: number | undefined;

    constructor(name: string, pet?: string){
        this.name = name;
        this.pet = pet;
    }
}

class RouteStack{
    stack!: string[];

    constructor(){
        this.initialize();
    }

    initialize(){
        this.stack = [];
    }
}

const routeStack = new RouteStack();
console.log(routeStack);