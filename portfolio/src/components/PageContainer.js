import React from "react";

export default function PageContainer(props) {
  return (
    <div className="page-container">
      <h2>{props.title}</h2>
      <h4>{props.content}</h4>
    </div>
  );
}
