'use client'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getUsers, getUser } from '../services/users'
import { type User } from '../types/users'

export default function useUsers ({ id }: { id?: string }) {
  const [selectedUser, setSelectedUser] = useState<User>()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['hydrate-users'],
    queryFn: async () => await getUsers(),
    enabled: !!(id == null)
  })

  const { isLoading: isLoadingUser } = useQuery({
    queryKey: ['user', id],
    queryFn: async () => await getUser(id),
    onSuccess: (user) => {
      const userData: User = user ?? {}
      setSelectedUser(userData)
    },
    enabled: !(id == null)
  })

  return { users: data, loading: isFetching || isLoading, loadingUser: isLoadingUser, selectedUser }
}
