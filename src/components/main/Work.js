import { useEffect, useState } from "react";
import "./Work.css";

export default function Work() {
  return (
    <div className="work">
      <h1>Work</h1>
      <WorkCard />
    </div>
  );
}

function WorkCard() {
  return (
    <div className="work-card">
      <h1>Work Card</h1>
    </div>
  );
}
