import Card from "./shared/card";
import { FaTimes } from "react-icons/fa";
function FeedbackItem({ id, rating, text, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => handleDelete(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

export default FeedbackItem;
