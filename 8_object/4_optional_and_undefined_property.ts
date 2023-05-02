/**
 * Optional and Undefined Property
 */
interface Dog {
    name: string;
    age: number;
    // 종을 모르면 undefined
    breed?: string;
}

const byulE: Dog = {
    name: '별이',
    age: 12,
    breed: '미니핀',
}

const ori: Dog = {
    name: '오리',
    age: 3,
}

interface Cat{
    name: string;
    age: number;
    breed?: string | undefined;
}

const nabi: Cat = {
    name: '나비',
    age: 7,
    // breed: undefined,
}