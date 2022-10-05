import React from "react";
import { Link } from "react-router-dom";

// function GoHomeButton() {
//   const history = useHistory();
//   return (
//     <button type="button" onClick={() => history.push("/")}>
//       Go Home
//     </button>
//   );
// }

function GoHomeButton() {
  return <Link to={"/"}>Go Home</Link>;
}

export default GoHomeButton;
