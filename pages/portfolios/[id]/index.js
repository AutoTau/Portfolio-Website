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

// export async function getServerSideProps({ query }) {
//     const json = await new PortfolioApi().getById(query.id);
//     const portfolio = json.data;

//     return { props: { portfolio } };
// }

// This function is executed at build time
export async function getStaticPaths() {
    const json = await new PortfolioApi().getAll();
    const portfolios = json.data;

    // Get paths we want to pre-render
    // Based on portfolio ID
    const paths = portfolios.map(portfolio => {
        return {
            params: {id: portfolio._id}
        }
    })

    // fallback: false infers that "not found" pages will be resolved into 404 pages
    return { paths, fallback: false };
}

// Create individual Portfolio Pages at Build Time
export async function getStaticProps({params}) {
    const json = await new PortfolioApi().getById(params.id);
    const portfolio = json.data;
    return { props: {portfolio}};
}

export default Portfolio