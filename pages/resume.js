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
                            <iframe style={{width: '120%', height: '1100px'}} src="/Benjamin_Portis_Resume_Final.pdf"/>
                        </p>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}
export default Resume;