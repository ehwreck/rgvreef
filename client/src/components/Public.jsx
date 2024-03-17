import React from "react";
import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Friends of the RGV Reef</span>
        </h1>
      </header>
    </section>
  );
  return content;
};

export default Public;
