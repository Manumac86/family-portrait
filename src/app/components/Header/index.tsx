import Image from 'next/image'
import Logo from 'src/images/logo.png'
import styles from './styles.module.css'

export default function Header() {
  return (
    <main>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={Logo} alt="Family Portrait" width={100} height={80} />
          <h1>Family Portrait</h1>
        </div>
        <nav>
          <ul className={styles.nav}>
            <li> <a href="/">Home</a> </li>
            <li> <a href="/team">Team</a> </li>
            <li> <a href="/users">Users</a> </li>
            <li> <a href="/help">FAQ</a> </li>
          </ul>
        </nav>
      </header>
    </main>
  )
}