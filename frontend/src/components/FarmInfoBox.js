import "../App.css";
import wheatImage from "../images/wheat.png";
import oakLogImage from "../images/oak_sapling.png";

function FarmInfoBox(props) {
  const itemImages = {
    wheatpng: wheatImage,
    oak_logpng: oakLogImage,
  };

  const data = props.data;
  const image = itemImages[data.image];
  const running = data.running.toString();

  return (
    <div className="farmInfoBox">
      <div className="farmImageBox">
        <img className="farmImage" src={image} alt={data.item} />
      </div>
      <div className="farmDataBox">
        <p className="itemName">{data.item}</p>
        <p className="farmData">Total output: {data.total}</p>
        <p className="farmData">In storage: {data.inStorage}</p>
        <p className="farmData">{running}</p>
      </div>
    </div>
  );
}

export default FarmInfoBox;
