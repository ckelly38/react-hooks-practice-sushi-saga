import React from "react";

function Sushi({sushiobj, budget, eaten, changeBudget}) {
  function eatSushi(event)
  {
    //check to see if it is already eaten... set the div style.disabled = true
    //if we can eat it, eventually need to call changeBudget with the cost in the App Component
    if (eaten.eaten)
    {
      console.error("already eaten!");
      alert("Error: already eaten!");
      return;
    }
    else
    {
      //attempt to eat it some how then decrement the budget...
      if (budget < sushiobj.price)
      {
        const myerrormsg = "Error: you cannot eat this item! It puts you over budget and you are not " +
          "allowed to go into debt!";
        console.error(myerrormsg);
        alert(myerrormsg);
        return;
      }
      else
      {
        //eat it here safe to eat it
        changeBudget(sushiobj);
      }
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten.eaten ? null : (
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
