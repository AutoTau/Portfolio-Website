import { useUser } from '@auth0/nextjs-auth0';
import Redirect from '@/components/shared/Redirect';
import { isAuthorized } from '@/utils/auth0'


const withAuth = Component => role => {
    return props => {
        const { user, error, loading } = useUser();

        if (loading) {
            return <p>Loading...</p>
        }

        if (!user) {
            return <Redirect ssr to="/api/auth/login" />
        } else {
            if (role && !isAuthorized(user, role)) {
                return <Redirect ssr to="/api/auth/login" />
            }
            return <Component user={user} loading={loading} {...props}></Component>
        }
    }
}

export default withAuth;