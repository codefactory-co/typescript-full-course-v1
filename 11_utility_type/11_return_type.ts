/**
 * Return Type
 */
type ReturnTypeSample = ReturnType<()=> number>;

type FunctionSign = (x: number, y: number) => number;

type ReturnType2 = ReturnType<FunctionSign>;