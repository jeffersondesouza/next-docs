import Link from 'next/link'
import Layout from '../components/Layout'

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`} >
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-next" title="Hello Next.js" content="conteudo do post" />
      <PostLink id="lear-next" title="Learn Next.js is awesome" content="conteudo do post 2"/>
      <PostLink id="how-to-deploy" title="Deploy apps with Zeit" content="conteudo do post 3" />
    </ul>
  </Layout>
)

export default Index
