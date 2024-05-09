import { useState, useEffect } from "react";
import axios from 'axios';

const PostForm = ({ post, onSuccess }) => {

    const [title, setTitle] = useState(post?.title || "");
    const [body, setBody] = useState(post?.body || "");

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
        }
    }, [post])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, body, userId: 1 }

        try {
            if (post) {
                const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, newPost);

                onSuccess(res.data, "update");

            } else {
                const res = await axios.put("https://jsonplaceholder.typicode.com/posts", newPost);

                onSuccess(res.data, "add");
            }
            setTitle("");
            setBody("");
        } catch (error) {
            console.log("Erro ao enviar mensagem", error)
        }
    }

    const handleDelete = async () => {
        try {
            await axios.delete(
                `https://jsonplaceholder.typicode.com/posts/${post.id}`
            );
            onSuccess(post, "delete");
        } catch (error) {
            console.error("Erro ao deletar postagem:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    value={title}
                    placeholder="Digite o titulo"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div>
                <textarea
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    placeholder="Digite o conteudo"></textarea>
            </div>
            <button>Enviar</button>
            {post && (
                <button type="button" onClick={handleDelete}>Deletar</button>
            )}
        </form>
    )
}

export default PostForm