import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <span className="block h-16" />
      <h1 className="text-6xl font-bold tracking-wide">Vorms</h1>
      <span className="block h-8" />
      <ol className="list-none">
        <li>
          <Link href="/basic">Basic</Link>
        </li>
      </ol>
    </main>
  )
}
