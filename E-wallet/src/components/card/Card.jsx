import Bitcoin from "../../assets/vendor-bitcoin.svg";
import Blockchain from "../../assets/vendor-blockchain.svg";
import Evil from "../../assets/vendor-evil.svg";
import Ninja from "../../assets/vendor-ninja.svg";
import ChipLight from "../../assets/chip-light.svg";
import ChipDark from "../../assets/chip-dark.svg";
import "./Card.css";
import { useDispatch } from "react-redux";
import { setActiveCard } from "./../../reducers/cardReducer";

const Card = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActiveCard(props));
  };

  return (
    <div
      onClick={handleClick}
      className="card"
      style={{
        backgroundColor:
          props.vendor === "Bitcoin"
            ? "#ffb543"
            : props.vendor === "Block chain inc"
            ? "#7c4fdf"
            : props.vendor === "Evil corp"
            ? "#de2f4f"
            : props.vendor === "Ninja bank"
            ? "#555555"
            : "#0000004A",
      }}
    >
      <div className="chip_and_logo_container">
      {(!props.vendor || props.vendor === "Select Vendor") ? (
      <img src={ChipDark} />
    ) : (
      <img src={ChipLight} />
    )}

        {props.vendor === "Bitcoin" ? (
          <img src={Bitcoin} />
        ) : props.vendor === "Block chain inc" ? (
          <img src={Blockchain} />
        ) : props.vendor === "Evil corp" ? (
          <img src={Evil} />
        ) : props.vendor === "Ninja bank" ? (
          <img src={Ninja} />
        ) : null}
      </div>

      <div className="card_number">{props.cardNumber}</div>

      <div className="cardinfo_container">
        <p className="cardinfo">CARDHOLDER</p>
        <p className="cardinfo">VALID THRU</p>
      </div>

      <div className="card_holder_container">
        <p className="card_holder">{props.cardHolder}</p>
        <p className="valid_thru">{props.validThru}</p>
      </div>
    </div>
  );
};

export default Card;
