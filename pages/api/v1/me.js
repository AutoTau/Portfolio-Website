
import auth0 from '@/utils/auth0';

async function me(req, res) {
    try {
        await auth0.handleProfile(req,res);
    } catch(error) {
        res.status(error.status || 400).end(error.message);
    }
}

export default me;