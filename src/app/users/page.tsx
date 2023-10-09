import { dehydrate } from '@tanstack/react-query'
import getQueryClient from '../getQueryClient'
import Hydrate from '../utils/hidrate.client'
import UsersList from '../components/UsersList/UsersList'
import { getUsers } from '../services/users'

export default async function UsersPage () {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['hydrate-users'], getUsers)
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <UsersList />
    </Hydrate>
  )
}
