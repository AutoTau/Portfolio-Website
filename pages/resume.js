import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useUser } from '@auth0/nextjs-auth0';
import { Row, Col } from 'reactstrap'

const Resume = () => {
    const { user, loading } = useUser();
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage title="My Resume - Ben Portis">
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <p align="center">
                            <iframe title="Resume" src={"https://drive.google.com/uc?id=1YPDLql2UoObwxJ_8GoEs0uhE4M0xHUF8"} style={{width: '100%', height: '1100px'}} />
                        </p>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}
export default Resume;