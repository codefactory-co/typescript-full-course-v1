/**
 * Property Check
 * 
 * 초과 속성 검사
 */
type TName = {
    name: string;
}

type TAge = {
    age: number;
}

const iu = {
    name: '아이유',
    age: 30,
}

const testName: TName = iu;
const testAge: TAge = iu;