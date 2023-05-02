/**
 * Type Inference
 * 
 * 타입 추론
 */
let stringType = 'string';
let booleanType = true;
let numberType = 30;

booleanType = false;

// booleanType = 'false';

const constStringType = 'const string';
const constBooleanType = true;

let yuJin = {
    name: '안유진',
    age: 2003
}

const yuJin2 = {
    name: '안유진',
    age: 2003
};

yuJin2.name = '코드팩토리';
console.log(yuJin2);

const yuJin3 = {
    name: '안유진' as const,
    age: 2003 as const,
}

// yuJin3.name = '코드팩토리';
console.log(yuJin3.name);
console.log(yuJin2.name);

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, '4', '5', '6'];

// numbers.push('6');
const number = numbers[0];
const nos = numbersAndString[0];
const nos2 = numbersAndString[100];

// tuple
const twoNumbers = [1, 3] as const;

// twoNumbers[0] = 10;
// twoNumbers.push(100);
const first = twoNumbers[0];
const first2 = twoNumbers[3];