import "./App.css";
import Header from "./components/header";
import FeedbackData from "./components/FeedbackData";
import FeedBackList from "./components/FeedBackList";
import { useState } from "react";

function App() {
  const [data, setdata] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are You Sure You Want To Delete!!!")) {
      setdata(data.filter((res) => res.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedback={data} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
