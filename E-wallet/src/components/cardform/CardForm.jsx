import './CardForm.css'
import Card from "../card/Card";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../reducers/cardReducer";
import { useNavigate } from "react-router-dom";

function CardForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      cardInfo.cardNumber &&
      cardInfo.cardHolder &&
      cardInfo.validThru &&
      cardInfo.cvc &&
      cardInfo.vendor
    ) {
      dispatch(addCard(cardInfo));
      setCardInfo({
        cardNumber: cardInfo.cardNumber,
        cardHolder: cardInfo.cardHolder,
        validThru: cardInfo.validThru,
        cvc: cardInfo.cvc,
        vendor: cardInfo.vendor,
      });
      navigate("/");
    } else {
      alert("Fyll i alla fält");
    }
  };

  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardHolder: "",
    validThru: "",
    cvc: "",
    vendor: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Card
        cardNumber={cardInfo.cardNumber}
        cardHolder={cardInfo.cardHolder}
        validThru={cardInfo.validThru}
        vendor={cardInfo.vendor}
      />

      <form onSubmit={handleSubmit} className="card_form">
        
        <label>
          CARD NUMBER
          <input
            type="number"
            name="cardNumber"
            placeholder=""
            value={cardInfo.cardNumber}
            onChange={handleChange}
          />
        </label>

        <label>
          CARDHOLDER
          <input
            type="text"
            name="cardHolder"
            placeholder="FIRSTNAME LASTNAME"
            value={cardInfo.cardHolder}
            onChange={handleChange}
          />
        </label>

        <label>
          VALID THRU
          <input
            type="text"
            name="validThru"
            placeholder="MM/YY"
            value={cardInfo.validThru}
            onChange={handleChange}
          />
        </label>

        <label>
          CVC
          <input
            type="number"
            name="cvc"
            placeholder="xxx"
            value={cardInfo.cvc}
            onChange={handleChange}
          />
        </label>

        <label>
          VENDORS
          <select
            name="vendor"
            value={cardInfo.vendor}
            onChange={handleChange}
          >
            <option value="">Select Vendor</option>
            <option value="Bitcoin">BITCOIN INC</option>
            <option value="Ninja bank">NINJA BANK</option>
            <option value="Block chain inc">BLOCK CHAIN INC</option>
            <option value="Evil corp">EVIL CORP</option>
          </select>
        </label>
        <button onClick={handleSubmit} className="add_button">
          Add Card
        </button>
      </form>
    </div>
  );
}

export default CardForm;
