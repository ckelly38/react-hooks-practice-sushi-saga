import React from "react";

function Sushi({sushiobj}) {
  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ null}>
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
