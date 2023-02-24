import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [farmInfo, setFarmInfo] = useState([]);
  const [farmOwner, setFarmOwner] = useState("");

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
  }, [farmOwner]);

  return (
    <div className="App">
      <h1>React App</h1>
      <button
        onClick={() => {
          setFarmOwner("Elliot");
        }}
      >
        Trykk på meg hvis du tør
      </button>
      <button
        onClick={() => {
          console.log(farmInfo);
        }}
      >
        MEG OG!!!
      </button>
    </div>
  );
}

export default App;
