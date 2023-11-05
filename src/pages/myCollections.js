import React from "react";
import Collection from "../components/Collection";

export default function MyCollections() {
  return (
    <div className="mt-3">
      <h2 className="mt-4">Collections</h2>
      <div className="d-flex gap-3 flex-wrap">
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
      </div>
    </div>
  );
}
