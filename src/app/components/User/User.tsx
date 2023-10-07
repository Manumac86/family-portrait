'use client'
import Image from 'next/image'
import useUsers from '@/app/hooks/useUsers'
import styles from './styles.module.css'

export default function User({ id }: { id: string }) {
  const { selectedUser, loadingUser } = useUsers({ id })

  if(loadingUser) return <p>Loading...</p>

  return (
    <div className={styles.usersList}>
      <Image
        src={`https://robohash.org/${selectedUser?.id}?set=set2&size=180x180`}
        alt='userName'
        style={{ height: 180, width: 180 }}
        width={180}
        height={180}
      />
      <h3>{selectedUser?.name}</h3>
    </div>
  )
}