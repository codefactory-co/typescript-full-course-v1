/**
 * Class as Type and Value
 */
class Dog {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    bark(){
        return `${this.name}가 짖습니다`;
    }
}

let ori = new Dog('오리');
console.log(ori.bark());

// ori = '오리';

ori = {
    name: '별이',
    bark(){
        return `${this.name}가 짖습니다.`;
    }
}

console.log(ori);