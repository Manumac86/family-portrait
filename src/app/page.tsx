import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase.from('posts').select('*')

  return (
    <main className='text-slate-500 dark:text-slate-400 dark:bg-slate-900'>
      <h1>Home</h1>
      {posts?.map(post => (
        <div key={post.id}>
          <Image alt={post.content.images[0].description} src={post.content.images[0].url} width={300} height={200}/>
          <p>{post.content.text}</p>
        </div>
      ))}
    </main>
  )
}
