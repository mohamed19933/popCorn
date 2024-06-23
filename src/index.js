import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./Start";

function Test() {
  const [movieRating, setmovieRating] = useState(0);

  return (
    <div>
      <StarRating
        color="blue"
        maxRating={3}
        onSetRating={setmovieRating}
        defaultRating={2}
      />
      <p>The Rating is {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} defaultRating={10} />
    <Test />
  </React.StrictMode>
);
