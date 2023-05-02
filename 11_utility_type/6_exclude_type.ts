/**
 * Exclude Type
 */

type NoString = Exclude<string | boolean | number, string>;

type NoFunction = Exclude<string | (() => void), Function>;