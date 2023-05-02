/**
 * Required Type
 */
interface Dog {
    name: string;
    age?: number;
    country?: string;
}

const requiredDog: Required<Dog> = {
    name: '모찌',
    age: 7,
    country: '한국'
}