interface FooAny<T extends any> {}

// @eslint-disable-next-line
const fooAny: FooAny<any> = {};

console.log(fooAny);
