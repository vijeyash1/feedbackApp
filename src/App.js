import "./App.css";
import Header from "./components/header";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "./components/FeedbackData";
import FeedBackList from "./components/FeedBackList";
import { useState } from "react";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [data, setdata] = useState(FeedbackData);
  const addfeedback = (e) => {
    e.id = uuidv4();
    setdata([e, ...data]);
    console.log(data);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are You Sure You Want To Delete!!!")) {
      setdata(data.filter((res) => res.id !== id));
    }
  };
  return (
    <>
      <Header />

      <div className="container">
        <FeedbackForm handleadd={addfeedback} />
        <FeedbackStats feedback={data} />
        <FeedBackList feedback={data} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
