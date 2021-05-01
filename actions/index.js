import { useEffect, useState } from "react"

const useGetPosts = () => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function getPosts() {
            const res = await fetch('/api/v1/posts');
            const result = await res.json();

            if (!res.ok) {
                setError(result);
            } else {
                setPosts(result);
            }

            setPosts(result);
        }

        getPosts();
    }, [])

    return { posts, error };
}

export default useGetPosts;