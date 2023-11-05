import React from "react";
import Collection from "../components/Collection";

export default function Collections() {
  return (
    <div className="container">
      <h2 className="mt-4" style={{ marginInline: "10px" }}>
        Collections
      </h2>
      <div className="d-flex mb-3 flex-wrap gap-3">
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
      </div>
    </div>
  );
}
