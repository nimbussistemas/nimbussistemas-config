interface User {
  name: string;
}

function getUser() {
  const user: User | null = null;

  console.log(user!!.name);
}

getUser();
