import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import PortfolioApi from '@/lib/api/portfolios';
import { Row, Col } from 'reactstrap';
import PortfolioCard from '@/components/PortfolioCard';

const Portfolios = ({ portfolios }) => {
    const { user, error: errorU, loading: loadingU } = useUser();

    return (
        <BaseLayout user={user} error={errorU} loading={loadingU}>
            <BasePage
                header="Portfolios"
                className="portfolio-page" >
                <Row>
                    {portfolios.map(portfolio =>
                        <Col key={portfolio._id} md="4">
                            <PortfolioCard portfolio={portfolio} />
                        </Col>
                    )}
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

// This function is called during build time
// Improves performance of page
// creates static page with dynamic data
export async function getStaticProps() {

    const json = await new PortfolioApi().getAll();
    const portfolios = json.data;
    return {
        props: { portfolios }
    }
}

export default Portfolios;