import { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from './PostForm';

const PostManager = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const axiosPosts = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(res.data.splice(0, 5));
            } catch (error) {
                setError(error.message)
            }
        }
        axiosPosts();
    }, [])

    return (
        <div>
            <h1>Genrenciar posts</h1>
            <PostForm />
            <h2>Postagens</h2>
            {
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button>Editar</button>
                    </div>
                ))
            }
        </div>
    )
}

export default PostManager