import CardForm from "../components/cardform/CardForm";
import Top from "../components/top/Top";

function AddCard() {
  return (
    <div className="main_container">
      <Top title="ADD A NEW BANK CARD" />
      <h5 className="main_heading">NEW CARD</h5>
      <CardForm />
    </div>
  );
}

export default AddCard;
