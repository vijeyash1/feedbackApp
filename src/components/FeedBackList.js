import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";

function FeedBackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return "No Feedback Yet";
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map(({ id, ...item }) => {
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem key={id} {...item} id={id} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map(({ id, ...item }) => {
  //       return (
  //         <FeedbackItem
  //           key={id}
  //           {...item}
  //           id={id}
  //           handleDelete={(id) => handleDelete(id)}
  //         />
  //       );
  //     })}
  //   </div>
  // );
}

export default FeedBackList;
