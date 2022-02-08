import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [feedback, setfeedback] = useState([]);
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
  const addfeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setfeedback([data, ...feedback]);
  };

  const editFeedback = (item) => {
    setfeedbackedit({
      item,
      edit: true,
    });
  };
  useEffect(() => {
    fetchFeedback();
  }, []);
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setfeedback(data);
    setisLoading(false);
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
