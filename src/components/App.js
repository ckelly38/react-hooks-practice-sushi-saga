import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [loaded, setIsLoaded] = useState(false);
  const [sushis, setSushis] = useState([]);

  useEffect(() => {
    fetch(API).then((response) => response.json()).then(function(response){
      console.log("response = ", response);
      setSushis(response);
      setIsLoaded(true);
    }).catch(function(err){
      console.error("there was a problem getting the data from the server!");
      console.error(err);
      alert("Error: failed to get the data from the server! See Log for details!");
    });
  }, []);

  console.log("loaded = " + loaded);
  console.log("sushis = ", sushis);

  return (
    <div className="app">
      {loaded ? (<>
        <SushiContainer sushis={sushis} />
        <Table />
      </>) : <p>Loading...</p>}
    </div>
  );
}

export default App;
