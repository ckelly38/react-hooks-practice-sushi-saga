import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis}) {
  const [startid, setStartId] = useState(sushis[0].id);

  let mysushicomps = null;
  if (sushis === undefined || sushis === null || sushis.length < 1);
  else
  {
    mysushicomps = sushis.map((sushi) => {
      if (sushi.id === startid || (startid < sushi.id && sushi.id < startid + 4))
      {
        return (<Sushi key={sushi.id} sushiobj={sushi} />);
      }
      else return null;
    });
  }

  function incrementStartId()
  {
    console.log("OLD startid = " + startid);
    console.log("sushis.length = " + sushis.length);
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
