import React from "react";

function MoreButton({cb}) {
  return <button onClick={(event) => cb()}>More sushi!</button>;
}

export default MoreButton;
