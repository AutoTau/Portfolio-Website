
import BaseLayout from "@/components/layouts/BaseLayout"
import BasePage from "@/components/BasePage";
import BlogApi from 'lib/api/blogs';
import { useUser } from '@auth0/nextjs-auth0';
import { Row, Col } from 'reactstrap';
import { SlateView } from 'slate-simple-editor';
import Avatar from 'components/shared/Avatar';

const BlogDetail = ({ blog, author }) => {
    const { user, loading } = useUser();
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage 
            title={blog ? `${blog.title} - Ben Portis` : ''}
            metaDescription={blog ? blog.subTitle : ''}
            className="slate-container">
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <Avatar
                            title={author ? author.name : ''}
                            image={author ? author.picture : ''}
                            date={blog ? blog.createdAt : ''}
                        />
                        <SlateView initialContent={blog? blog.content : ''} />
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export async function getStaticPaths() {
    const { data } = await new BlogApi().getAll();
    const paths = data.map(({ blog }) => ({ params: { slug: blog.slug } }));
    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const { data: { blog, author } } = await new BlogApi().getBySlug(params.slug);
    return { props: { blog, author }, revalidate: 1 }
}

export default BlogDetail;