import React from "react";
import "./InfoItem.css";
export default function InfoItem(props) {
  return (
    <div className="info">
      <div className="iTitle">{props.iTitle}</div>
      <div className="iDetail">{props.iDetail}</div>
      <div className="iExplain">{props.iExplain}</div>
    </div>
  );
}
