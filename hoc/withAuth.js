import { useUser } from '@auth0/nextjs-auth0';
import Redirect from '@/components/shared/Redirect';

const withAuth = (Component) => {
    return props => {
        const { user, error, loading } = useUser();

        if (loading) {
            return <p>Loading...</p>
        }

        if (!user) {
            return <Redirect ssr to="/api/auth/login" />
        } else {
            return <Component user={user} loading={loading} {...props}></Component>
        }
    }
}

export default withAuth;