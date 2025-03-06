interface User {
  address?: {
    street?: string;
  };
}

const user: User = {};

const street = user.address?.street!;

console.log(street);
