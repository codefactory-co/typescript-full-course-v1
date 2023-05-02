/**
 * Property Decorator
 */
class UserModel{
    @PropertyLogger
    id: string;
    name: string;

    constructor(id: string, name: string){
        this.id = id;
        this.name = name;
    }
}

function PropertyLogger(target: any, propertyKey: string){
    console.log(`${propertyKey} 값이 정의 됐습니다.`)
}