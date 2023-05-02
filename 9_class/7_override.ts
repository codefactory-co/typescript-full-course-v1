/**
 * Override
 */
class Parent {
    shout(name: string){
        return `${name}야 안녕!`;
    }
}

class WrongChild extends Parent{
    // 1) 부모 메서드와 반환 타입이 일치해야한다.
    // 2) 부모 메서드에 필수인 파라미터들이 존재해야한다.
    // 3) 부모 메서드에서 optional인 파라미터들이 자식에서
    //    필수로 지정되면 안된다.
    // shout() {
        
    // }
}

class Child extends Parent{
    // 1) 부모 메서드와 반환 타입이 일치해야한다.
    // 2) 부모 메서드에 필수인 파라미터들이 존재해야한다.
    // 3) 부모 메서드에서 optional인 파라미터들이 자식에서
    //    필수로 지정되면 안된다.
    shout(name: string, me?: string): string {
        if(!me){
            return super.shout(name);
        }else{
            return super.shout(name) + ` 내 이름은 ${me}야!`;
        }
    }
}

const child = new Child();
console.log(child.shout('아이유'));
console.log(child.shout('아이유', '코드팩토리'));

/**
 * 속성 override
 */
class PropertyParent{
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

// class PropertyChild extends PropertyParent{
//     name: number;

//     constructor(name: number){
//         this.name = name;
//     }
// }

class PropertyParent2 {
    name?: string | number | undefined;

    constructor(name: string | number){
        this.name = name;
    }
}

class PropertyChild2 extends PropertyParent2{
    name: string;

    constructor(name: string){
        super(name);
        this.name = name;
    }
}

const child2 = new PropertyChild2('헬로우')
child2.name;