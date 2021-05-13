import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import { useUser } from '@auth0/nextjs-auth0';
import { Row, Col } from 'reactstrap';
import PortfolioForm from '@/components/PortfolioForm';
import { useCreatePortfolio } from '@/actions/portfolios';
import Redirect from '@/components/shared/Redirect';

const PortfolioNew = () => {
    const { user, error: userError, loading: userLoading } = useUser();
    const [createPortfolio, { data, loading, error }] = useCreatePortfolio();

    if (data) {
        return <Redirect to="/portfolios" />
    }

    return (
        <BaseLayout user={user} loading={userLoading}>
            <BasePage header="Create Portfolio">
                <Row>
                    <Col md="8">
                        <PortfolioForm onSubmit={createPortfolio} />
                        { error && <div className="alert alert-danger mt-2">{error}</div>}
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default withAuth(PortfolioNew)('admin');