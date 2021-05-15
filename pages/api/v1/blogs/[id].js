import BlogApi from '@/lib/api/blogs';
import { getAccessToken } from '@auth0/nextjs-auth0';

export default async function handleBlog(req, res) {

    if (req.method === 'GET') {
        try {
            const json = await new BlogApi().getById(req.query.id);
            return res.json(json.data);
        } catch (e) {
            return res.status(e.status || 422).json(e.response.data);
        }
    }

}