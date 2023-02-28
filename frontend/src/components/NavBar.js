import styles from "../css/App.module.css";

function FarmInfoBox(props) {
  const farmOwners = {
    Elliot: "5d5cfed6258c40359ea04f4e03ee8015",
    Trygve: "549e2517a7cd4bd8baaf1cc8bf78b4f6",
    Herman: "2bd04d9055af4130a99bebe8e7b6c668",
  };

  const data = props.data;
  const owner = farmOwners[data.owner];

  return (
    <img
      className={`${styles.playerIcon} ${data.farmOwner === data.owner ? styles.activeOwner : ""}`}
      alt="Player Head"
      src={"https://cravatar.eu/helmhead/" + owner}
      onClick={() => props.setFarmOwner(data.owner)}
    />
  );
}

export default FarmInfoBox;
