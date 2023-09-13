import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({budget, sushis, changeBudget}) {
  const [startid, setStartId] = useState(sushis[0].id);

  let myiniteatensushi = [];
  if (sushis === undefined || sushis === null || sushis.length < 1);
  else
  {
    myiniteatensushi = sushis.map((sushi) => {
      return {
        id: sushi.id,
        eaten: false
      };
    });
  }

  const [eatenSushi, setEatenSushi] = useState(myiniteatensushi);

  function eatMySushi(sushiobj)
  {
    if (sushiobj === undefined || sushiobj === null)
    {
      throw new Error("the sushiobj that we ate must not be null!");
    }
    //else;//do nothing

    //eat it then change the budget...
    let nweatensushi = eatenSushi.map((esushi) => {
      if (esushi.id === sushiobj.id)
      {
        let nwobj = {...esushi};
        nwobj.eaten = true;
        return nwobj;
      }
      else return esushi;
    });
    setEatenSushi(nweatensushi);
    changeBudget(sushiobj.price);
  }

  let mysushicomps = null;
  if (sushis === undefined || sushis === null || sushis.length < 1);
  else
  {
    mysushicomps = sushis.map((sushi) => {
      if (sushi.id === startid || (startid < sushi.id && sushi.id < startid + 4))
      {
        let myindex = eatenSushi.findIndex((esushi) => {
          if (esushi.id === sushi.id) return true;
          else return false;
        });
        //console.log("myindex = " + myindex);

        if (myindex < 0 || (myindex > eatenSushi.length - 1 && eatenSushi.length > 0))
        {
          throw new Error("the eaten item must be found on the list!");
        }
        //else;//do nothing

        return (<Sushi key={sushi.id} budget={budget} sushiobj={sushi} eaten={eatenSushi[myindex]}
          changeBudget={eatMySushi} />);
      }
      else return null;
    });
  }

  function incrementStartId()
  {
    //console.log("OLD startid = " + startid);
    //console.log("sushis.length = " + sushis.length);
    if (startid + 4 > sushis.length) setStartId(sushis[0].id);
    else setStartId(startid + 4);
  }

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {mysushicomps}
      <MoreButton cb={incrementStartId} />
    </div>
  );
}

export default SushiContainer;
