import { getusers } from '@/functions/users'
import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  loader: async () => {
    const users = await getusers()
    console.log('This is on the server')

    return { users }
  },
})

function RouteComponent() {
  const [now] = React.useState(() => new Date().toString())
  const { users } = Route.useLoaderData()
  console.log(users)

  return <div className='text-3xl text-red-500'>Hello "/"! {now}</div>
}
