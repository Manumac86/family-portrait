import User from '@/app/components/User/User'

export default async function UsersPage ({ params }: { params: { id: string } }) {
  return (
    <User id={params.id} />
  )
}
