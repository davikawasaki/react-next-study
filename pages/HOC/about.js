// Using layout as HOC
import withLayout from '../../components/LayoutAsHOC'

const Page = () => <p>This is the about page</p>

export default withLayout(Page)