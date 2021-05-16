
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Masthead from 'components/shared/Masthead';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import { Row, Col, Container } from 'reactstrap';

const Blogs = () => {
    const { user, loading } = useUser();
    return (
        <BaseLayout
            navClass="transparent" className="blog-listing-page"
            user={user} loading={loading}>
            <Masthead imagePath="/images/home-bg.jpg">
                <h1>Fresh Blogs</h1>
                <span className="subheading">Programming, travelling...</span>
            </Masthead>
            <BasePage
                className="blog-body">
                <Row>
                    <Col md="10" lg="8" className="mx-auto">
                        <div>
                            <div className="post-preview clickable">
                                <Link href="#">
                                    <a>
                                        <h2 className="post-title">
                                            Some Title
                                        </h2>
                                        <h3 className="post-subtitle">
                                            Some Subtitle
                                        </h3>
                                    </a>
                                </Link>
                                <p className="post-meta">Posted by
                                    <a href="#"> Ben Portis </a>
                                        - 11/11/2011
                                </p>
                            </div>
                            <hr></hr>
                        </div>
                    </Col>
                    <Col md="10" lg="8" className="mx-auto">
                        <div>
                            <div className="post-preview clickable">
                                <Link href="#">
                                    <a>
                                        <h2 className="post-title">
                                            Some Title
                                        </h2>
                                        <h3 className="post-subtitle">
                                            Some Subtitle
                                        </h3>
                                    </a>
                                </Link>
                                <p className="post-meta">Posted by
                                <a href="#"> Ben Portis </a>
                                - 11/11/2011
                                </p>
                            </div>
                            <hr></hr>
                        </div>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default Blogs