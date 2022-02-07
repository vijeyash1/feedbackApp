import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Aboutpage from "./pages/Aboutpage";
import Abouticonlink from "./components/Abouticonlink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedBackList />
                </>
              }
            />

            <Route path="/about" element={<Aboutpage />} />
          </Routes>
          <Abouticonlink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
