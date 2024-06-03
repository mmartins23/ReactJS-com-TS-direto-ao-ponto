import Card from "./Card";

const Board = ({ cards, onCardClick }) => {
  return (
    <div className='board'>
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={() => onCardClick(card)}/>
      ))}
    </div>
  )
}

export default Board;
