import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useUser } from '@auth0/nextjs-auth0';
import PortfolioApi from '@/lib/api/portfolios';

const Portfolio = ({ portfolio }) => {
    const { user, error: errorU, loading: loadingU } = useUser();
    return (
        <BaseLayout user={user} loading={loadingU}>
            <BasePage header="Portfolio Detail">
                {
                    JSON.stringify(portfolio)
                }
            </BasePage>
        </BaseLayout>
    )
}

export async function getServerSideProps({ query }) {
    const json = await new PortfolioApi().getById(query.id);
    const portfolio = json.data;

    return { props: { portfolio } };
}


export default Portfolio