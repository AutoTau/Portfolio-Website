import BaseLayout from "@/components/layouts/BaseLayout";
import Link from "next/link";
import BasePage from "@/components/BasePage";
import useGetPosts from "@/actions";

const Portfolios = () => {

    const { posts, error, loading } = useGetPosts();

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
                { loading &&
                    <p>Loading Data...</p>
                }
                { posts &&
                    <ul>
                        {renderPosts()}
                    </ul>
                }
                { error &&
                    <div className="alert alert-danger">{error.message}</div>
                }
            </BasePage>
        </BaseLayout>
    )
}

export default Portfolios;