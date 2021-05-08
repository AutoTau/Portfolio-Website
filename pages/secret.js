
import BaseLayout from "@/components/layouts/BaseLayout"
import BasePage from "@/components/BasePage";
import { useUser } from '@auth0/nextjs-auth0';
import Redirect from '@/components/shared/Redirect';
import withAuth from '@/hoc/withAuth';

const Secret = ({ title }) => {
    const { user, error, loading } = useUser();

    if (loading) {
        return <p>Loading...</p>
    }

    if (!user) {
        return <Redirect to="/api/auth/login" />
    } else {
        return (
            <BaseLayout user={user} loading={loading}>
                <BasePage>
                    <h1>I am the Secret Page - {title}</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}

// // High Order Component - HOC
// const withAuth = (Component) => props => 
//     <Component title="Hello World" {...props}></Component>

export default withAuth(Secret);