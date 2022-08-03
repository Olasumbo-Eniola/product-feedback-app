import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Suggestion from "./Components/Suggestion";
import FeedbackDetail from "./Components/Feedback";
import NewFeedback from "./Components/Feedback/NewFeedback";
import EditFeedback from "./Components/Feedback/EditFeedback";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Suggestion />} />
        <Route path={`/feedback/:id`} element={<FeedbackDetail />} />
        <Route path={`/new`} element={<NewFeedback />} />
        <Route path={`/edit/:id`} element={<EditFeedback />} />
      </Routes>
    </div>
  );
}

export default App;
