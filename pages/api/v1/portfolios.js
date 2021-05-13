import PortfolioApi from '@/lib/api/portfolios';
import { getAccessToken } from '@auth0/nextjs-auth0';

export default async function createPortfolio(req, res) {
    try {
        const { accessToken } = await getAccessToken(req, res);
        const jsonData = await new PortfolioApi(accessToken).createPortfolio(req.body);
        return res.json(jsonData.data);
    } catch (e) {
        return res.status(e.status || 400).end(e.message);
    }
}