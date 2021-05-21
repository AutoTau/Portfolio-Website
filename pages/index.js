import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '/components/BasePage';
import Typed from 'react-typed';
import { useUser } from '@auth0/nextjs-auth0';
import { Container, Row, Col } from 'reactstrap';
import { useState, useRef, useEffect } from 'react';

const roles = ["Developer", "Tech Enthusiast", "React JS", "C++", "C#", "C", "Java", "Powershell", "Unity"];

const Index = () => {
  const { user, loading } = useUser();
  const [isFlipping, setIsFlipping] = useState(true);

  // maintainining value after re-rendering component
  const flipInterval = useRef();

  useEffect(() => {
    animateCard();
    return () => flipInterval.current && clearInterval(flipInterval.current);
  }, [])

  const animateCard = () => {
    flipInterval.current = setInterval(() => {
      setIsFlipping((previousFlipping) => !previousFlipping);
    }, 20000)
  }

  return (
    <BaseLayout
      user={user}
      loading={loading}
      navClass="transparent"
      className={`cover ${isFlipping ? 'cover-orange' : 'cover-blue'}`}>
      <BasePage indexPage title="Portfolio - Ben Portis">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="image image-1">
                        <div className="hero-section-content">
                          <h2> Software Engineer </h2>
                          <div className="hero-section-content-intro">
                            Take a look at my portfolio and job history.
                          </div>
                        </div>
                      </div>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="image image-2">
                      </div>
                      <div className="shadow-custom shadow-custom-orange">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Ben Portis.
                    Get informed, collaborate and discover projects I've worked on throughout the years!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={70}
                  backSpeed={70}
                  strings={roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
                <div className="hero-welcome-bio">
                  <h1>
                    Let's take a look at my work.
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  )
}

export default Index;