const Card = ({ card, onClick }) => {
  return (
    <div
      className={`card ${card.isFlipped ? "flipped" : ""}`}
      onClick={onClick}>
      {card.isFlipped ? card.value : "?"}
    </div>
  )
}

export default Card;
