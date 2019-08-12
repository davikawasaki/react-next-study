// Using layout as props content
import Layout from '../../../components/LayoutAsPropsContent.js'

const aboutPageContent = <p>This is the about page</p>

export default function About() {
  return <Layout content={aboutPageContent} />
}