import React from "react";

function Sushi({sushiobj, budget}) {
  function eatSushi(event)
  {
    if (budget < sushiobj.price)
    {
      console.error("Error: you cannot eat this item! It puts you over budget and you are not allowed " +
        "to go into debt!");
      return;
    }
    else
    {
      //
    }
  }

  return (
    <div className="sushi">
      <div className="empty plate" onClick={eatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={sushiobj.img_url}
            alt={sushiobj.name + "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushiobj.name} - ${sushiobj.price}
      </h4>
    </div>
  );
}

export default Sushi;
