import { useLocation, useNavigate } from "react-router-dom";
import { Alimento, nomesAlimentos, quantidadePessoas } from "../types";
import "./ResultadoChurrasco.css";

// Resultados esperados do cálculo
type ResultadosChurrasco = {
  pessoas: number;
  alimentosSelecionados: Alimento[];
};

const PaginaResultado = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ResultadosChurrasco;

  // Calcule a quantidade de comida baseado no estado recebido
  const totalPorAlimento = state.alimentosSelecionados.reduce(
    (acc, alimento) => {
      acc[alimento] = (quantidadePessoas[alimento] * state.pessoas) / 1000; // Convertendo para kg
      return acc;
    },
    {} as Record<Alimento, number>
  );

  const reiniciar = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h2 className="title">Resultado para {state.pessoas} pessoas:</h2>
      {state.alimentosSelecionados.map((alimento) => (
        <p key={alimento} className="resultText">
          {nomesAlimentos[alimento]}: {totalPorAlimento[alimento]} kg
        </p>
      ))}
      <button onClick={reiniciar} className="resetButton">
        Reiniciar
      </button>
    </div>
  );
};

export default PaginaResultado;