import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useUser } from '@auth0/nextjs-auth0';
import { Row, Col } from 'reactstrap'
import Benjamin_Portis_Resume_Final from '@/public/images/Benjamin_Portis_Resume_Final.pdf'

const Resume = () => {
    const { user, loading } = useUser();
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage title="My Resume - Ben Portis">
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <p align="center">
                            <iframe title="Resume" src={`${Benjamin_Portis_Resume_Final}#view=fitH`} style={{width: '100%', height: '100%'}} />
                        </p>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}
export default Resume;