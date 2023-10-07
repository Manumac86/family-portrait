'use client'

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getUsers, getUser } from '../services/users';
import { User } from '../types/users';

export default function useUsers({ id }: { id?: string }) {
  const [selectedUser, setSelectedUser] = useState<User>();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["hydrate-users"],
    queryFn: () => getUsers(),
    enabled: !id
  });

  const { isLoading: isLoadingUser } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    onSuccess: (user) => {
      const userData = user ?? {} as User;
      setSelectedUser(userData)
    },
    enabled: !!id
  });

  return { users: data, loading: isFetching  || isLoading, loadingUser: isLoadingUser, selectedUser: selectedUser }
}