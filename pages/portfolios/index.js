import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import PortfolioApi from '@/lib/api/portfolios';

const Portfolios = ({portfolios}) => {
    const { user, error: errorU, loading: loadingU } = useUser();
    const renderPortfolios = (portfolios) => {
        return portfolios.map(portfolio =>
            <li key={portfolio._id} style={{ 'fontSize': '20px' }}>
                <Link as={`/portfolios/${portfolio._id}`} href="/portfolios/[id]">
                    <a>
                        {portfolio.title}
                    </a>
                </Link>
            </li>
        )
    }

    return (
        <BaseLayout user={user} error={errorU} loading={loadingU}>
            <BasePage>
                <ul>
                    {renderPortfolios(portfolios)}
                </ul>
            </BasePage>
        </BaseLayout>
    )
}

// This function is called during build time
// Improves performance of page
// creates static page with dynamic data
export async function getStaticProps () {
    
    const json = await new PortfolioApi().getAll();
    const portfolios = json.data;
    return {
        props: { portfolios }
    }
}

export default Portfolios;