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
  console.log(data)

  const updateDate = new Date(data.time)
  let updateHours = updateDate.getHours();
  updateHours = ("0" + updateHours).slice(-2);
  let updateMin = updateDate.getMinutes();
  updateMin = ("0" + updateMin).slice(-2);

  const mins = new Date(Date.now() - data.time).getMinutes()

  return (
    <div className="farmInfoBox">
      <div className="farmImageBox">
        <img className="farmImage" src={image} alt={data.item} />
      </div>
      <p className={`farmStatus ${data.running ? "farmStatusActive" : ""}`} />
      <div className="farmDataBox">
        <div className="farmHeader">
          <p>{data.item}</p>
          <p>Updated: {updateHours}:{updateMin} - {mins}m ago</p>
        </div>
        <p className="farmData">Total output: {data.total}</p>
        <p className="farmData">In storage: {data.inStorage}</p>
      </div >
    </div >
  );
}

export default FarmInfoBox;
