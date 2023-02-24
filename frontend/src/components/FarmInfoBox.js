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

  return (
    <div className="farmInfoBox">
      <div className="farmImageBox">
        <img className="farmImage" src={image} alt={data.item} />
      </div>
      <p className={`farmStatus ${data.running ? "farmStatusActive" : ""}`} />
      <div className="farmDataBox">
        <div className="farmHeader">
          <p>{data.item}</p>
          <p>23:30 <span>25/02/2023</span></p>
        </div>
        <p className="farmData">Total output: {data.total}</p>
        <p className="farmData">In storage: {data.inStorage}</p>
      </div>
    </div>
  );
}

export default FarmInfoBox;
