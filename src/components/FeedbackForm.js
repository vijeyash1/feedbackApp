import React, { useContext, useState, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/card";

function FeedbackForm() {
  const [task, settask] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [rating, setrating] = useState("");
  const [message, setmessage] = useState("select a rating before submitting");
  const { addfeedback, feedbackedit, updateEditFeedback } =
    useContext(FeedbackContext);
  useEffect(() => {
    if (feedbackedit.edit === true) {
      setbtnDisabled(false);
      settask(feedbackedit.item.text);
      setrating(feedbackedit.item.rating);
    }
  }, [feedbackedit]);
  const handleChange = (e) => {
    if (task === "") {
      setbtnDisabled(true);
      setmessage("");
    } else if (task !== "" && task.trim().length < 5) {
      setbtnDisabled(true);
      setmessage("task should have minimum 6 letters");
    } else {
      setmessage("select a rating before submitting");
      setbtnDisabled(false);
    }
    settask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim().length > 5) {
      const newFeedback = {
        text: task,
        rating,
      };
      if (feedbackedit.edit === true) {
        updateEditFeedback(feedbackedit.item.id, newFeedback);
      } else {
        addfeedback(newFeedback);
      }

      settask("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Enter the task here </h2>
        <RatingSelect select={(e) => setrating(e)} />
        <div className="input-group">
          <input
            type="text"
            value={task}
            placeholder="Task"
            onChange={handleChange}
          />
          <Button isDisabled={btnDisabled} type="submit">
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
