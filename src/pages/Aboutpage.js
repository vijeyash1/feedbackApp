import React from "react";
import Card from "../components/shared/card";
function Aboutpage() {
  const date = new Date().toDateString();
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This project lets you add task and delete the finished tasks </p>
        <p>version 1.0.0</p>
        <p>Date: {date}</p>
        <p>
          <a href="/">back to home</a>
        </p>
      </div>
    </Card>
  );
}

export default Aboutpage;
