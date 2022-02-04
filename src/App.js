import "./App.css";
import Header from "./components/header";
import FeedbackData from "./components/FeedbackData";
import FeedBackList from "./components/FeedBackList";
import { useState } from "react";

function App() {
  const [data, setdata] = useState(FeedbackData);

  const deleteFeedback = (e) => {
    console.log(e);
  };
  return (
    <div className="App">
      <Header />
      <FeedBackList feedback={data} handleDelete={deleteFeedback} />
    </div>
  );
}

export default App;
