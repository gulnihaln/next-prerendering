import Link from 'next/link'
export default function Home() {
  return ( 
    <>
      <h1>Next Js PRe-rendering </h1>
      <Link href='/users'>
        <a>Users</a>
      </Link>
    </>
  )
}