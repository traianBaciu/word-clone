import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ length }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {length} {length > 1 ? "guesses" : "guess"}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
