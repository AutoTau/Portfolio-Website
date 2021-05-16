import { getSession } from '@auth0/nextjs-auth0';
import BlogApi from 'lib/api/blogs';

export default async function getUserBlogs(req, res) {
    try {
        const { accessToken } = await getSession(req, res);
        const json = await new BlogApi(accessToken).getByUser();
        return res.json(json.data);
    } catch (e) {
        return res.status(e.status || 422).json(e.response.data);
    }
}