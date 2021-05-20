
import { useEffect } from 'react';
import BaseLayout from "@/components/layouts/BaseLayout"
import BasePage from "@/components/BasePage";
import { useUser } from '@auth0/nextjs-auth0';
import { Row, Col } from 'reactstrap';

const About = () => {
    const { user, loading } = useUser();

    useEffect(() => {
        return () => {
            window.__isAboutLoaded = true;
        }
    }, [])

    const createFadeInClass = () => {
        if (typeof window !== 'undefined') {
            return window.__isAboutLoaded ? '' : 'fadein';
        }

        return 'fadein';
    }

    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage title="About Me - Ben Portis" className="about-page">
                <Row className="mt-5">
                    <Col md="6">
                        <div className="left-side">
                            <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
                            <h4 className={`subtitle ${createFadeInClass()}`}>To The About Page</h4>
                            <p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about me.</p>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className={`${createFadeInClass()}`}>
                            <p>My name is Ben Portis and I am an experienced software engineer. </p>
                            <p>
                                Throughout my career I have strived to build scalable applications with a minimalistic aesthetic.
                                User experience is always a top priority, and provides a solid foundation to all of my software."
                                school/work/project history
                            </p>
                            <p>
                                goals/vision/plans for the future etc
                            </p>
                        </div>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}
export default About