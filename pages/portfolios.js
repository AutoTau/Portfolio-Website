import BaseLayout from "../components/layouts/BaseLayout"
import axios from "axios"


const Portfolios = ({ posts }) => {
    console.log(posts)

    const renderPosts = () => {
        return posts.map(post => <li key={post.id}>{post.title}</li>)
    }

    return (
        <BaseLayout >
            <h1>I am the Portfolios page</h1>
            <ul>
                {renderPosts()}
            </ul>
        </BaseLayout>
    )
}

Portfolios.getInitialProps = async () => {
    let posts = [];
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        posts = res.data;
    } catch {
        console.error("Cannot fetch posts!");
    }

    return { posts: posts.slice(0, 10) };
}

export default Portfolios;