import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeedBackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    const res = await fetch("https://feedbackmern-backend.onrender.com/api/feedbacks");
    const data = await res.json();
    setFeedbacks(data);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`https://feedbackmern-backend.onrender.com/api/feedbacks/${id}`, { method: "DELETE" });
    fetchFeedbacks();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold text-center mb-8">All Feedbacks</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((f) => (
          <div key={f._id} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-400">{f.name}</h3>
            <p className="text-gray-400 text-sm mb-2">{f.email}</p>
            <p className="mb-4">{f.message}</p>
            <div className="flex justify-between">
              <Link to={`/edit/${f._id}`} className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded">Edit</Link>
              <button onClick={() => handleDelete(f._id)} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBackList;
