import axios from "axios";


export default async (req, res) => {
    try {
        const axiosRes = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const posts = axiosRes.data;
        res.status(200).json(posts.slice(0, 10));
    } catch (e) {
        console.error(`Cannot fetch posts! Error: ${e}`);
        res.status(e.status || 400).end({message: 'API Error!'});
    }
}