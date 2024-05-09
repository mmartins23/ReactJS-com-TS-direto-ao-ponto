import { useState, useEffect } from "react";
import axios from 'axios';

const PostForm = ({ onSuccess }) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, body, userId: 1 }

        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);

            // adicionar post na lista
            onSuccess(res.data, "add");
        } catch (error) {
            console.log("Erro ao enviar mensagem", error)
        }
    }

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
        </form>
    )
}

export default PostForm