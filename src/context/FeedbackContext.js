import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setfeedback] = useState([
    {
      id: "stringid1",
      text: "this data comes from the use context provider 1",
      rating: 10,
    },
    {
      id: "stringid2",
      text: "this data comes from the use context provider 2",
      rating: 8,
    },
    {
      id: "stringid3",
      text: "this data comes from the use context provider 3",
      rating: 6,
    },
  ]);
  const [feedbackedit, setfeedbackedit] = useState({
    item: {},
    edit: false,
  });
  const deleteFeedback = (id) => {
    if (window.confirm("Are You Sure You Want To Delete!!!")) {
      setfeedback(feedback.filter((res) => res.id !== id));
    }
  };
  const updateEditFeedback = (id, updItem) => {
    setfeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };
  const addfeedback = (e) => {
    e.id = uuidv4();
    setfeedback([e, ...feedback]);
    console.log(feedback);
  };
  const editFeedback = (item) => {
    setfeedbackedit({
      item,
      edit: true,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addfeedback,
        editFeedback,
        feedbackedit,
        updateEditFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
