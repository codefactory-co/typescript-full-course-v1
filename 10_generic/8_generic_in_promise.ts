/**
 * Generic in Promise
 */
const afterTwoSeconds = function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        }, 2000)
    })
}

const runner = async function () {
    const res = await afterTwoSeconds();
    console.log(res);
}

runner();

const afterOneSecond = function(): Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        }, 1000)
    })
}

const runner2 = async function () {
    const res = await afterOneSecond();
    console.log(res);
}

runner2();

const runner3 = async function(){
    return 'string return';
}