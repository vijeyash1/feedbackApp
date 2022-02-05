import React from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

function FeedBackList({ feedback, handleDelete }) {
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
              <FeedbackItem
                key={id}
                {...item}
                id={id}
                handleDelete={(id) => handleDelete(id)}
              />
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
FeedBackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default FeedBackList;
