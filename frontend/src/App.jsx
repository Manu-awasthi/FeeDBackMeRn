import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FeedBackList from "./Components/FeedBackList";
import FeedBackForm from "./Components/FeedBackForm";
import FeedBackEdit from "./Components/FeedBackEdit";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FeedBackList />} />
        <Route path="/add" element={<FeedBackForm />} />
        <Route path="/edit/:id" element={<FeedBackEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
