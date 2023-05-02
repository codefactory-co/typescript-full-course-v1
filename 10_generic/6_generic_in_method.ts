/**
 * Method에서 Generic 사용하기
 */

class Idol<T>{
    id: T;
    name: string;

    constructor(id: T, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello<Time>(logTime: Time){
        return `[${logTime}] 안녕하세요 제 이름은 ${this.name}이고 ID는 ${this.id}입니다.`;
    }
}

const yuJin = new Idol('a999', '안유진');

console.log(yuJin.sayHello('2023'));
console.log(yuJin.sayHello(1992));

class Message<T> {
    sayHello<Time>(logTime: Time, message: T){
        console.log(`logTime: ${typeof logTime} / message: ${typeof message}`);
    }
}

const message = new Message<string>();
message.sayHello<number>(2000, '하이!');

class DuplicatedGenericName<T>{
    sayHello<T>(logTime: T){
        console.log(`logTime: ${typeof logTime}`);
    }
}

const duplicate = new DuplicatedGenericName<string>();

duplicate.sayHello<number>(123);