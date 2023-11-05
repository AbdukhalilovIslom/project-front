import React from "react";
import { ReactComponent as Like } from "../assets/images/like.svg";
import { ReactComponent as Comment } from "../assets/images/comment.svg";

export default function Items() {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p style={{ cursor: "pointer" }}>All comments (7)</p>
        <div>
          <Like style={{ marginRight: "10px", cursor: "pointer" }} />
          <Comment style={{ cursor: "pointer" }} />
        </div>
        <div className="d-flex flex-wrap gap-1 mt-2">
          <span>#book</span>
          <span>#game</span>
          <span>#store</span>
        </div>
        <p className="mt-2" style={{ marginBottom: "0", cursor: "pointer" }}>
          Add comment...
        </p>
      </div>
    </div>
  );
}
