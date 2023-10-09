import { AuthButtonServer } from '../components/AuthButton/AuthButton-server'

export default async function Login () {
  return (
    <main className='grid place-content-center min-h-screen text-center'>
      <h1 className='mb-4 text-4xl tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Login</h1>
      <AuthButtonServer />
    </main>
  )
}
