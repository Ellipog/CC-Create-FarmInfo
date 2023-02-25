import styles from "./css/App.module.css";
import React, { useState, useEffect } from "react";
import FarmInfoBox from "./components/FarmInfoBox";

function App() {
  const [farmInfo, setFarmInfo] = useState([]);
  const [farmOwner, setFarmOwner] = useState("Elliot");

  function startFetching() {
    fetch(`http://81.167.168.153:25584/fetchFarmInfo?${farmOwner}`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFarmInfo(data);
      });
  }
  setTimeout(() => startFetching(), 60000);
  // eslint-disable-next-line
  useEffect(() => startFetching(), [farmOwner]);





  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <img className={`${styles.playerIcon} ${farmOwner === "Elliot" ? styles.activeOwner : ""}`} alt="Player Head" src="https://cravatar.eu/helmhead/ellipog" onClick={() => setFarmOwner("Elliot")} />
        <img className={`${styles.playerIcon} ${farmOwner === "Trygve" ? styles.activeOwner : ""}`} alt="Player Head" src="https://cravatar.eu/helmhead/trygvedev" onClick={() => setFarmOwner("Trygve")} />
        <img className={`${styles.playerIcon} ${farmOwner === "Herman" ? styles.activeOwner : ""}`} alt="Player Head" src="https://cravatar.eu/helmhead/yepcoc" onClick={() => setFarmOwner("Herman")} />
      </div>
      <div className={styles.content}>
        <h1>{farmOwner}'s farms!</h1>
        <div className={styles.farmsList}>
          {Object.values(
            farmInfo.reduce((acc, curr) => {
              if (curr.owner === farmOwner && (!acc[curr.item] || curr.time > acc[curr.item].time)) {
                acc[curr.item] = curr;
              }
              return acc;
            }, {})
          ).map((data, i) => (
            <FarmInfoBox key={i} data={data} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
