import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeedBackForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:500/api/feedbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit feedback");
      setResponse("✅ Feedback submitted successfully!");
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      setResponse("❌ Error submitting feedback");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-96 transition hover:scale-105">
        <h2 className="text-2xl font-bold text-center mb-6">Submit Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input id="name" value={formData.name} onChange={handleChange} placeholder="Name"
            className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none" required />
          <input id="email" value={formData.email} onChange={handleChange} placeholder="Email"
            className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none" required />
          <textarea id="message" value={formData.message} onChange={handleChange} placeholder="Message"
            className="w-full p-3 rounded bg-gray-700 text-white h-24 resize-none focus:ring-2 focus:ring-indigo-500 outline-none" required />
          <button type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded font-semibold transition duration-300">
            Submit
          </button>
        </form>
        {response && <p className="text-center mt-4 animate-pulse">{response}</p>}
      </div>
    </div>
  );
};

export default FeedBackForm;
