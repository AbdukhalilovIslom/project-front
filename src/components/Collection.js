import React from "react";
import defImg from "../assets/images/Снимок экрана 2023-11-04 в 12.54.20.png";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="card" style={{ width: "14rem" }}>
      <img src={defImg} className="card-img-top" alt="def-img" />
      <Link to="/" className="card-body">
        <h5 className="card-title mb-0">Card title</h5>
      </Link>
    </div>
  );
}
