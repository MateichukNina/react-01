import React from "react";
import './data.json'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

export default function Statistics(items){
  return (
    <section className="statistics">
  {items.title && <h2 className="title">{items.title}</h2>}

  <ul className="stat-list">
    {items.stats.map((stat, index) => (
      <li key={index} className="item" style={{ background: getRandomHexColor() }}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage} %</span>
    </li>
    ))}
  </ul>
</section>
  )
}