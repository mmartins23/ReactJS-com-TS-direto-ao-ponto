import { useState, useEffect } from "react";
import axios from 'axios';

const PostForm = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
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