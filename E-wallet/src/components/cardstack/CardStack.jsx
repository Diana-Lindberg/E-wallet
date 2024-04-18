import { useSelector } from "react-redux";
import Card from "../card/Card";
import { selectCard, selectActiveCard } from "../../reducers/cardReducer";

function CardStack() {
  const cards = useSelector(selectCard);
  const activeCard = useSelector(selectActiveCard);
  const filteredCards = activeCard
    ? cards.filter((card) => card.cardNumber !== activeCard.cardNumber)
    : cards;

  return (
    <div>
      {filteredCards.map((card) => (
        <Card
          key={card.cardNumber}
          cardNumber={card.cardNumber}
          cardHolder={card.cardHolder}
          validThru={card.validThru}
          cvc={card.cvc}
          vendor={card.vendor}
        />
      ))}
    </div>
  );
}

export default CardStack;
