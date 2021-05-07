import BaseLayout from "@/components/layouts/BaseLayout";
import axios from "axios";
import BasePage from "@/components/BasePage";
import { useGetPostById } from "@/actions";
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';

const Portfolio = () => {
    const router = useRouter();
    const { data: portfolio, error, loading } = useGetPostById(router.query.id);
    const { user, error: errorU, loading: loadingU } = useUser();
    return (
        <BaseLayout user={user} loading={loadingU}>
            <BasePage>
                {loading && <p>Loading Data...</p>}
                {error && <div className="alert alert-danger">{error.message}</div>}
                {portfolio &&
                    <>
                        <h1>I am the Portfolio Page</h1>
                        <h1>{portfolio.title}</h1>
                        <p>Body: {portfolio.body}</p>
                        <p>ID: {portfolio.id}</p>
                    </>
                }
            </BasePage>
        </BaseLayout>
    )
}

export default Portfolio