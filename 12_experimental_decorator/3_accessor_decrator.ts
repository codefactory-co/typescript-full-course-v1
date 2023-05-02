/**
 * Accessor Decorator
 */
class Rectangle{
    #height: number;
    #width: number;

    constructor(height: number, width: number){
        this.#height = height;
        this.#width = width;
    }

    @Configurable(false)
    get height(){
        return this.#height;
    }
    
    @Configurable(true)
    get width(){
        return this.#width;
    }
}

function Configurable(configurable: boolean){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        descriptor.configurable = configurable;
    }
}

const rectangle = new Rectangle(100, 200);

console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));