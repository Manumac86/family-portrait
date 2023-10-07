'use client'
import Image from 'next/image'
import useUsers from '@/app/hooks/useUsers'
import styles from './styles.module.css'
import Link from 'next/link'
export default function UsersList() {
  const { users, loading } = useUsers({})

  if(loading) return <p>Loading...</p>

  return (
    <div className={styles.usersList}>
      {users?.map((user) => (
        <Link
          href={`/users/${user.id}`}
          key={user.id}
          className={styles.userCard}
        >
          <Image
            src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
            alt={user.name}
            style={{ height: 180, width: 180 }}
            width={180}
            height={180}
          />
          <h3>{user.name}</h3>
        </Link>
      ))}
    </div>
  )
}