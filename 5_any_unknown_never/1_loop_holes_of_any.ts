/**
 * Loopholes of Any
 */
let number: number;
number = 10;

// number.toUpperCase();

// (number as any).toUpperCase();

const multiplyTwo = (x: number, y: number) => {
    return x * y;
}

let args1: any = '코드팩토리';
let args2: any = true;

multiplyTwo(args1, args2);
// multiplyTwo('코드팩토리', true);

let iu:any = {name: '아이유', age: 30};
iu;

const callbackRunner = (x: number, y: number, callback: any)=>{
    return callback(x);
}

const callback = (x:number, y: number)=>{
    return x * y;
}

console.log(callbackRunner(5, 4, callback));