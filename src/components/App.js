import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [loaded, setIsLoaded] = useState(false);
  const [sushis, setSushis] = useState([]);
  const [budget, setMoney] = useState(100);
  const [plates, setPlates] = useState([]);

  function decrementBudgetBy(cost)
  {
    if (cost === undefined || cost === null || isNaN(cost) || cost < 0)
    {
      throw new Error("invalid cost found and used here!");
    }
    //else;//do nothing

    if (budget < cost)
    {
      console.error("this item costs too much!");
      alert("Error: you cannot go into debt, but this item puts you over budget!");
    }
    else setMoney(budget - cost);
  }

  function putSushiPlateOnTable(sushiobj)
  {
    if (sushiobj === undefined || sushiobj === null)
    {
      throw new Error("the eaten sushi object must be defined, but it was not!");
    }
    //else;//do nothing

    let nwplates = [...plates, sushiobj];
    setPlates(nwplates);
  }

  function eatSushiAndDecrementBudget(sushiobj)
  {
    if (sushiobj === undefined || sushiobj === null)
    {
      throw new Error("the eaten sushi object must be defined, but it was not!");
    }
    //else;//do nothing
    
    decrementBudgetBy(sushiobj.price);
    putSushiPlateOnTable(sushiobj);
  }

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
        <SushiContainer budget={budget} sushis={sushis} changeBudget={eatSushiAndDecrementBudget} />
        <Table budget={budget} plates={plates} />
      </>) : <p>Loading...</p>}
    </div>
  );
}

export default App;
