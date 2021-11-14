
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
                            <h1 className={`title ${createFadeInClass()}`}>Hello!</h1>
                            <h4 className={`subtitle ${createFadeInClass()}`}>Welcome To My About Page</h4>
                            <p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about me.</p>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className={`${createFadeInClass()}`}>
                            <p>My name is Ben Portis and I am an experienced software engineer who is hungry to learn more. </p>
                            <p>
                                Customer-focused Software Developer with extensive experience delivering complex automation software from requirements testing to monitoring and upkeep while maintaining extensive documentation. Collaborative problem solver awarded for cross-departmental teamwork in troubleshooting system issues and developing resolutions. Trusted mentor with success training and coaching interns through code review, design patterns, and Agile process. Detail oriented programmer driven by continuous improvement, scalability, performance, and reliability.
                            </p>
                            <p>
                                I have a Bachelor of Science degree in Computer Science from Portland State University.
                                Throughout my schooling I volunteered for the Computer Action Team, providing systems administration for
                                The Maseeh College of Engineering and Computer Science. In my Junior year of university I started a software development internship at Intel,
                                where I developed test automation software for Bluetooth and WiFi technology. I also spent a large portion of my time building custom automation software and GUI applications   
                                to aid in the automation of hardware validation and certification.
                            </p>
                            <p>
                                Today I work as a Software Engineer for Intel's Logic Technology Development team. I develop observability solutions for complex factory automation systems and delivere expert customer service through on-call support to solve automation issues within Intel’s primary factory research and development facility. My work ensures the factory’s production quality and output.

                                In the future, I plan to expand my knowledge of software engineering by tackling more complex problems, and continuing my constant learning of new technologies and programming languages.
                            </p>
                            <p>
                                Please visit my github to see more information about projects I work on for fun, and feel free to contact me for collaboration, or if you have any questions.
                            </p>
                            <p className="lead">
                                <a href="https://github.com/AutoTau" target="_" className="btn btn-lg btn-secondary">Github Page</a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}
export default About