import "./App.css";
import React, { useState, useEffect } from "react";
import FarmInfoBox from "./components/FarmInfoBox";

function App() {
  const [farmInfo, setFarmInfo] = useState([]);
  const [farmOwner, setFarmOwner] = useState("Elliot");

  async function fetchFarmInfo() {
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

  useEffect(() => {
    if (farmOwner !== "") {
      fetchFarmInfo();
    }
    // eslint-disable-next-line
  }, [farmOwner]);

  return (
    <div className="bodyBox">
      <div className="sideBar">
        <img className={`playerIcon ${farmOwner === "Elliot" ? "activeOwner" : ""}`} alt="Player Head" src="https://cravatar.eu/helmhead/ellipog" onClick={() => setFarmOwner("Elliot")} />
        <img className={`playerIcon ${farmOwner === "Trygve" ? "activeOwner" : ""}`} alt="Player Head" src="https://cravatar.eu/helmhead/trygvedev" onClick={() => setFarmOwner("Trygve")} />
        <img className={`playerIcon ${farmOwner === "Herman" ? "activeOwner" : ""}`} alt="Player Head" src="https://cravatar.eu/helmhead/yepcoc" onClick={() => setFarmOwner("Herman")} />
      </div>
      <div className="mainInfo">
        <h1>{farmOwner}'s farms!</h1>
        {Object.values(
          farmInfo.reduce((acc, curr) => {
            if (curr.owner === farmOwner && (!acc[curr.item] || curr.total > acc[curr.item].total)) {
              acc[curr.item] = curr;
            }
            return acc;
          }, {})
        ).map((data, i) => (
          <FarmInfoBox key={i} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
