import  { useEffect, useState } from "react";
import axios from "axios";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const ShowPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const searchPosts = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
                
                // Update state with fetched posts data (only first 5 posts)
                setPosts(res.data.slice(0, 5));
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        searchPosts();
    }, []);


    return (
        <div>
            <h2>Posts List</h2>
            {loading ? (<p>Loading posts ...</p>) : (
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div> 
    );
}

export default ShowPosts;
