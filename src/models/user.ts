import { v4 as uuidv4 } from 'uuid';

export default interface User {
  id?: string;
  name: string;
  age: number;
  email?: string;
}
const users : User[] = [];

export function createUser(user : User) : User {
  user.id = uuidv4();

  users.push(user);

  return user
}

export function updateUser(user: User) : void{
  const index = users.findIndex((item) => item.id === user.id);

  users[index] = user;
}

export function getUserByEmail(email: string) : User | undefined {
  return users.find((item) => item.email === email);
}

export function removeUser(id: string) : void {
  const index = users.findIndex((item) => item.id == id);

  users.splice(index, 1);
}