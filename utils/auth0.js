
import { getSession } from '@auth0/nextjs-auth0';


export const isAuthorized = (user, role) => {
    return (user && user['https://portfolio-portis.com' + '/roles'].includes(role))
}

export const authorizeUser = async (req, res) => {
    const session = await getSession(req, res);
    if (!session || !session.user) {
        return {
            redirect: {
                destination: '/api/auth/login',
                permanent: false,
            },
        }
    }

    return session.user;
}

export const withAuth = getData => role => async ({ req, res }) => {
    const session = await getSession(req, res);
    if (!session || !session.user || (role && !isAuthorized(session.user, role))) {
        return {
            redirect: {
                destination: '/api/auth/login',
                permanent: false,
            },
        }
    }

    const data = getData ? await getData({ req, res }, session.user) : {};
    return { props: { user: session.user, ...data } };
};