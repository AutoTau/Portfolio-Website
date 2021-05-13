import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useUser } from '@auth0/nextjs-auth0';
import withAuth from '@/hoc/withAuth';
import { useRouter } from 'next/router';
import { useGetPortfolio } from '@/actions/portfolios';
import { Row, Col } from 'reactstrap';
import PortfolioForm from '@/components/PortfolioForm';

const PortfolioEdit = () => {
    const { user, error: errorU, loading: loadingU } = useUser();
    const router = useRouter();
    const { data } = useGetPortfolio(router.query.id);

    return (
        <BaseLayout user={user} loading={loadingU}>
            <BasePage header="Portfolio Edit">
                <Row>
                    <Col md="8">
                        {data &&
                            <PortfolioForm
                                onSubmit={(data => alert(JSON.stringify(data)))}
                                initialData={data}
                            />
                        }
                        {errorU && <div className="alert alert-danger mt-2">{error}</div>}
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default withAuth(PortfolioEdit)('admin')