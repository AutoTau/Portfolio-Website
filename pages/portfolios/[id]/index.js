import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import PortfolioApi from '@/lib/api/portfolios';
import { formatDate } from '/helpers/functions';
import { useUser } from '@auth0/nextjs-auth0';


const Portfolio = ({ portfolio }) => {
    const { user, error: errorU, loading: loadingU } = useUser();

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
                            <h1 class="cover-heading">{portfolio.title}</h1>
                            <p class="lead dates">{formatDate(portfolio.startDate)} - {formatDate(portfolio.endDate) || 'Present'}</p>
                            <p class="lead info mb-0">{portfolio.jobTitle} | {portfolio.company} | {portfolio.location}</p>
                            <p class="lead">{portfolio.description}</p>
                            <p class="lead">
                                <a href={portfolio.companyWebsite} target="_" class="btn btn-lg btn-secondary">Visit Company</a>
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