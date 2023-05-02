/**
 * Object Intersection
 */
type PrimitiveIntersection = string & number;

type PersonType = {
    name: string;
    age: number;
}

type CompanyType = {
    company: string;
    companyRegistrationNumber: string;
}

type PersonAndCompany = PersonType & CompanyType;

const jisoo: PersonAndCompany = {
    name: '지수',
    age: 32,
    company: 'YG',
    companyRegistrationNumber: 'xxxyyyyzzzz',
}

type PetType = {
    petName: string;
    petAge: number;
}

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
    // PersonType
    name: '코드팩토리',
    age: 32,

    // CompanyType
    company: '주식회사 코드팩토리',
    companyRegistrationNumber: 'xxxyyyzzz',

    // PetType
    petName: '오리',
    petAge: 8,
}