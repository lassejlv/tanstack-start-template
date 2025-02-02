import { createServerFn } from '@tanstack/start'

interface User {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: '4t5r6@example.com',
    password: 'password',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export const getusers = createServerFn().handler(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return users
})
