/**
 * Generic in Interface
 */
interface Cache<T> {
    data: T[];
    lastUpdate: Date;
}

const cache1: Cache<string> = {
    data: ['data1', 'data2'],
    lastUpdate: new Date(),
}

// const cach2: Cache<number> = {
//     data: [123, 456],
//     lastUpdate: new Date(),
// }

interface DefaultGeneric<T = string>{
    data:T[];
}

// const cache3: DefaultGeneric = {
//     data: [123, 456],
// }