import React from "react";
import Item from "../components/Item";

export default function Items() {
  return (
    <div className="container">
      <h2 className="mt-4" style={{ marginInline: "10px" }}>
        Items
      </h2>
      <div className="d-flex mb-3 flex-wrap">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}
