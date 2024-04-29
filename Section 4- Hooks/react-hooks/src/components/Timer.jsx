import { useState, useEffect } from "react";

const Timer = () => {

    const [seconds, setSeconds] = useState(0);

    // Função para incrementar o contador a cada segundo
    useEffect(() => {
        console.log('Componente mounted');

        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        // Função de limpeza para desmontar o intervalo quando o componente for desmontado
        return () => {
            console.log('Componente unmounted');
            clearInterval(intervalId);
        }

    }, [])
    return (
        <div>Timer: {seconds} seconds.</div>
    )
}

export default Timer