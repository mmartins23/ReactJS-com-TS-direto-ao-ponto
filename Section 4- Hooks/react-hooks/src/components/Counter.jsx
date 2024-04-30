import { useReducer } from 'react';

// Estado inicial
const initialState = { count: 0 };

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState; // Reinicia o estado para o initialState
        default:
            throw new Error();
    }
};

// Componente do contador
const Counter = () => {
    // Inicialização do estado usando useReducer e o initialState
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
};

export default Counter;
