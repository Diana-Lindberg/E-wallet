import Card from "../components/card/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Top from "../components/top/Top";
import CardStack from "../components/cardstack/CardStack";

function Home() {
  const activeCard = useSelector((state) => state.cards.activeCard);

  return (
    <div className="main_container">
      <Top title="E-WALLET" />
      <h5 className="main_heading">Active card</h5>

      {activeCard ? (
        <Card
          cardNumber={activeCard.cardNumber}
          cardHolder={activeCard.cardHolder}
          validThru={activeCard.validThru}
          cvc={activeCard.cvc}
          vendor={activeCard.vendor}
        />
      ) : (
        <Card />
      )}

      <CardStack />
      <Link to={"/AddCard"}>
        <button className="new_card_button">ADD A NEW CARD</button>
      </Link>
    </div>
  );
}

export default Home;
