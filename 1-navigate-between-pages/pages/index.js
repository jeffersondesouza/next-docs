import Link from 'next/link'

const Index = () => (
  <div>
    <Link  href="/about">
      <a title="Pagina de about">About Page</a>
    </Link>
    <Link  href="/about">
      <button>Go to About Page</button>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index
