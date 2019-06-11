import { withRouter } from 'next/router'
import Layout from '../components/Layout'

const Content = props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
)

const Page = props => {
  console.log('props:', props)
  return (
    <Layout>
      <Content {...props} />
    </Layout>
  )
}
export default withRouter(Page)
