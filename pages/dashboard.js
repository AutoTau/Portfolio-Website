
import BaseLayout from "@/components/layouts/BaseLayout"
import BasePage from "@/components/BasePage";
import Masthead from 'components/shared/Masthead';
import BlogApi from 'lib/api/blogs';
import Link from 'next/link';
import PortDropdown from 'components/shared/Dropdown';
import { Row, Col } from 'reactstrap';
import { withAuth } from 'utils/auth0';
import { getSession } from '@auth0/nextjs-auth0';
import { useUpdateBlog } from 'actions/blogs';

const Dashboard = ({ user, blogs }) => {

    const [updateBlog] = useUpdateBlog();

    const changeBlogStatus = async (blogId, status) => {
        await updateBlog(blogId, {status});
    }


    // Creates a dropdown option based on the blog status
    const createOption = (blogStatus) => {
        return blogStatus === 'draft' ? { view: 'Publish Blog', value: 'published' }
            : { view: 'Make a Draft', value: 'draft' }
    }

    // Creates dropdown options
    const createOptions = (blog) => {
        const option = createOption(blog.status)
        return [
            { key: `${blog._id}-published`, text: option.view, handlers: { onClick: () => changeBlogStatus(blog._id, option.value) } },
            { key: `${blog._id}-delete`, text: 'Delete', handlers: { onClick: () => { alert(`Clicking Delete! ${blog._id}`) } } }
        ]
    }

    // Renders the blogs with the given status
    const renderBlogs = (blogs, status) => (
        <ul className="user-blogs-list">
            { blogs.filter(blog => blog.status === status).map(blog =>
                <li key={blog._id}>
                    <Link href="/blogs/editor/[id]" as={`/blogs/editor/${blog._id}`}>
                        <a>{blog.title}</a>
                    </Link>
                    <PortDropdown items={createOptions(blog)} />
                </li>
            )
            }
        </ul>
    )

    return (
        <BaseLayout navClass="transparent" user={user} loading={false}>
            <Masthead imagePath="/images/home-bg.jpg" />
            <BasePage className="blog-user-page">
                <Row>
                    <Col md="6" className="mx-auto text-center">
                        <h2 className="blog-status-title"> Published Blogs </h2>
                        {renderBlogs(blogs, 'published')}
                    </Col>
                    <Col md="6" className="mx-auto text-center">
                        <h2 className="blog-status-title"> Draft Blogs </h2>
                        {renderBlogs(blogs, 'draft')}
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export const getServerSideProps = withAuth(async ({ req, res }) => {
    const { accessToken } = await getSession(req, res);
    const json = await new BlogApi(accessToken).getByUser();
    return { blogs: json.data }
})('admin');
export default Dashboard;