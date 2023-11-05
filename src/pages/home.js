import React from "react";
import Collection from "../components/Collection";
import Item from "../components/Item";

export default function Home() {
  return (
    <div>
      <div className="container">
        <h2 className="mt-4" style={{ marginInline: "10px" }}>
          Latest items
        </h2>
        <div className="d-flex mb-3 flex-wrap">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <h2 className="mt-4" style={{ marginInline: "10px" }}>
          Top collections
        </h2>
        <div className="d-flex mb-3 flex-wrap">
          <Collection />
          <Collection />
          <Collection />
          <Collection />
          <Collection />
        </div>
      </div>
    </div>
  );
}
