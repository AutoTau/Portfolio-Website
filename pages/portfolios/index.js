import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import PortfolioApi from '@/lib/api/portfolios';
import PortfolioCard from '@/components/PortfolioCard';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { isAuthorized } from '@/utils/auth0';
import { Row, Col, Button } from 'reactstrap';
import { useDeletePortfolio } from '@/actions/portfolios';



const Portfolios = ({ portfolios }) => {
    const router = useRouter();
    const [deletePortfolio, {data, error}] = useDeletePortfolio();
    const { user, error: errorU, loading: loadingU } = useUser();

    const _deletePortfolio = async (e, portfolioId) => {
        e.stopPropagation();
        const isConfirmed = confirm('Are you sure you want to delete this portfolio?');
        if (isConfirmed) {
            await deletePortfolio(portfolioId);
        }
    }

    return (
        <BaseLayout user={user} error={errorU} loading={loadingU}>
            <BasePage
                header="Portfolios"
                className="portfolio-page">
                <Row>
                    {portfolios.map(portfolio =>
                        <Col
                            key={portfolio._id}
                            onClick={() => {
                                router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`)
                            }}
                            md="4">
                            <PortfolioCard
                                portfolio={portfolio}>
                                { user && isAuthorized(user, 'admin') &&
                                    <>
                                        <Button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            router.push('/portfolios/[id]/edit', `/portfolios/${portfolio._id}/edit`)
                                        }}
                                        className="mr-2" 
                                        color="warning">Edit</Button>
                                        <Button 
                                        onClick={(e) => _deletePortfolio(e, portfolio._id)}
                                        color="danger">Delete</Button>
                                    </>
                                }
                            </PortfolioCard>
                        </Col>
                    )
                    }
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