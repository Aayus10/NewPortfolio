import React from "react";
import "./Resume.css";
import InfoItem from "./InfoItem";

export default function Resume() {
  return (
    <>
      <div className="rescontainer">
        <div className="rescontainer1"></div>
        <div className="rescontainer2">
          <div className="rescontainer21">
            <div className="summary">SUMMARY</div>
            <InfoItem
              iTitle="👋 AAYUSH SHRESTHA"
              iDetail="📧 aayushs.262@gmail.com"
              iExplain="I'm excited to apply my theoretical knowledge from college into real projects. Eager to expand my skill set and problem solving abilities. I'm ready to learn, work hard and contribute within a dynamic team."
            ></InfoItem>
            <div className="summary">KEY SKILLS</div>
            <div className="skills">
              <li>🚀 HTML, CSS, Bootstrap</li>
              <li>⚛️ React JS</li>
              <li>🐍 Python</li>
              <li>🔍 Microsoft SQL Server</li>
              <li>🔗 Git</li>
            </div>
          </div>
          <div className="rescontainer22">
            <div className="summary">EDUCATION</div>
            <InfoItem
              iTitle="🎓 ADVANCED COLLEGE OF ENGINEERING AND MANAGEMENT, KALANKI, KATHMANDU"
              iDetail="📅 2019 - 2024 (Expected)"
              iExplain="Course: Bachelors in Computer Engineering"
            ></InfoItem>
            <InfoItem
              iTitle="🎓 ST XAVIER'S COLLEGE, MAITIGHAR, KATHMANDU"
              iDetail="📅 2017 - 2019"
              iExplain="Course: +2 (Science)"
            ></InfoItem>
            <InfoItem
              iTitle="🎓 DAFFODIL PUBLIC SCHOOL, KAPAN, KATHMANDU"
              iDetail="📅 2007 - 2017"
              iExplain="Course: School Level"
            ></InfoItem>
          </div>
        </div>
      </div>
    </>
  );
}
