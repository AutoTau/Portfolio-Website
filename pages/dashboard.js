
import BaseLayout from "@/components/layouts/BaseLayout"
import BasePage from "@/components/BasePage";
import Masthead from 'components/shared/Masthead';
import BlogApi from 'lib/api/blogs';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import { withAuth } from 'utils/auth0';
import { getSession } from '@auth0/nextjs-auth0';

const Dashboard = ({ user, blogs }) => {
    
    // Renders the blogs with the given status
    const renderBlogs = (blogs, status) => (
        <ul className="user-blogs-list">
            { blogs.filter(b => b.status === status).map(blog =>
                <li key={blog._id}>
                    <Link href="/blogs/[id]>" as={`/blogs/editor/${blog._id}`}>
                        <a>{blog.title}</a>
                    </Link>
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
                        {
                            renderBlogs(blogs, 'published')
                        }
                    </Col>
                    <Col md="6" className="mx-auto text-center">
                        <h2 className="blog-status-title"> Draft Blogs </h2>
                        {
                            renderBlogs(blogs, 'draft')
                        }
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