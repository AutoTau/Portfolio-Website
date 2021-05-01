import { useEffect, useState } from "react";

const useGetPosts = () => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPosts() {
            const res = await fetch('/api/v1/posts');
            const result = await res.json();

            if (!res.ok) {
                setError(result);
            } else {
                setPosts(result);
            }

            setLoading(false);
        }

        getPosts();
    }, [])

    return { posts, error, loading };
}

export default useGetPosts;