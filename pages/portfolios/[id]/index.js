import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useUser } from '@auth0/nextjs-auth0';
import PortfolioApi from '@/lib/api/portfolios';

const Portfolio = ({ portfolio }) => {
    const { user, error: errorU, loading: loadingU } = useUser();

    // TODO: provide stylings improvement
    return (
        <BaseLayout 
        navClass="transparent"
        user={user} 
        loading={loadingU}>
            <BasePage
                noWrapper
                indexPage
                title={`${portfolio.title} - Ben Portis`}
                metaDescription={portfolio.description}>
                <div className="portfolio-detail">
                    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
                        <main role="main" class="inner page-cover">
                            <h1 class="cover-heading">Title</h1>
                            <p class="lead dates">dates</p>
                            <p class="lead info mb-0">jobTitle | company | location</p>
                            <p class="lead">description</p>
                            <p class="lead">
                                <a href="#" class="btn btn-lg btn-secondary">Visit Company</a>
                            </p>
                        </main>
                    </div>
                </div>
            </BasePage>
        </BaseLayout>
    )
}

// This function is executed at build time
export async function getStaticPaths() {
    const json = await new PortfolioApi().getAll();
    const portfolios = json.data;

    // Get paths we want to pre-render
    // Based on portfolio ID
    const paths = portfolios.map(portfolio => {
        return {
            params: { id: portfolio._id }
        }
    })

    // fallback: false infers that "not found" pages will be resolved into 404 pages
    return { paths, fallback: false };
}

// Create individual Portfolio Pages at Build Time
export async function getStaticProps({ params }) {
    const json = await new PortfolioApi().getById(params.id);
    const portfolio = json.data;
    return { props: { portfolio } };
}

export default Portfolio