import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import PortfolioApi from '@/lib/api/portfolios';
import { Row, Col, Button } from 'reactstrap';
import PortfolioCard from '@/components/PortfolioCard';
import { isAuthorized } from '@/utils/auth0';

const Portfolios = ({ portfolios }) => {
    const router = useRouter();
    const { user, error: errorU, loading: loadingU } = useUser();

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
                                        <Button color="danger">Delete</Button>
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