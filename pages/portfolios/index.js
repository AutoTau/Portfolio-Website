import BaseLayout from "../../components/layouts/BaseLayout";
import axios from "axios";
import Link from "next/link";
import BasePage from "../../components/BasePage";

const Portfolios = ({ posts }) => {
    console.log(posts)

    const renderPosts = () => {
        return posts.map(post =>
            <li key={post.id}>
                <Link href={`/portfolios/${post.id}`}>
                    <a>
                        {post.id}
                    </a>
                </Link>
            </li>)
    }

    return (
        <BaseLayout >
            <BasePage>
                <h1>I am the Portfolios page</h1>
                <ul>
                    {renderPosts()}
                </ul>
            </BasePage>
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