import React from "react";
import Card from "../components/shared/card";
import { Link } from "react-router-dom";
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
          <Link to="/">back to home</Link>
        </p>
      </div>
    </Card>
  );
}

export default Aboutpage;
