enum Test {
  A = 1,
  B = 1, // This should trigger the error
  C = 2,
  D = 'test',
  E = 'test', // This should trigger the error
}

console.log(Test.A);
