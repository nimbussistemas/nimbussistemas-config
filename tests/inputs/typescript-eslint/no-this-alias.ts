export class Person {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  hello() {
    const self = this;
    console.log(self);
    return this.value;
  }
}

const person = new Person('test');

console.log(person.hello());
