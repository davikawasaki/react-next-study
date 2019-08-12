// Using layout as props content
import Layout from '../../../components/LayoutAsPropsContent.js'

const indexPageContent = <p>Hello Next.js</p>

export default function Index() {
  return <Layout content={indexPageContent} />
}