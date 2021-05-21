import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import PortfolioApi from '@/lib/api/portfolios';
import { formatDate } from '/helpers/functions';
import { useUser } from '@auth0/nextjs-auth0';


const Portfolio = ({ portfolio }) => {
    const { user, loading: loadingU } = useUser();

    return (
        <BaseLayout 
        navClass="transparent"
        user={user} 
        loading={loadingU}>
            <BasePage
                noWrapper
                indexPage
                title={portfolio ? `${portfolio.title} - Ben Portis` : ''}
                metaDescription={portfolio ? portfolio.description : ''}>
                <div className="portfolio-detail">
                    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                        <main role="main" className="inner page-cover">
                            <h1 className="cover-heading">{portfolio ? portfolio.title : ''}</h1>
                            <p className="lead dates">{portfolio ? formatDate(portfolio.startDate) : ''} - {portfolio ? formatDate(portfolio.endDate) : '' || 'Present'}</p>
                            <p className="lead info mb-0">{portfolio ? portfolio.jobTitle : ''} | {portfolio ? portfolio.company : ''} | {portfolio ? portfolio.location: ''}</p>
                            <p className="lead">{portfolio ? portfolio.description : ''}</p>
                            <p className="lead">
                                <a href={portfolio ? portfolio.companyWebsite : ''} target="_" className="btn btn-lg btn-secondary">Visit Company</a>
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
    
    return { paths, fallback: true };
}

// Create individual Portfolio Pages at Build Time
export async function getStaticProps({ params }) {
    const json = await new PortfolioApi().getById(params.id);
    const portfolio = json.data;
    return { props: { portfolio }, revalidate: 1 };
}

export default Portfolio