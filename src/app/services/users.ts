import { User } from '../types/users'

export async function getUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`, { cache: 'no-store' })
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const users = (await res.json()) as User[];
  return users;
}

export async function getUser(id?: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: 'no-store' })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const user = (await res.json()) as User;
  return user;
}