import React, { useState } from "react";
import api from "../api";

interface ReportFormProps {
  onReportAdded: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({ onReportAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/reports", { title, description });
      setTitle("");
      setDescription("");
      onReportAdded(); // refresh report list
    } catch (error) {
      console.error("Error adding report:", error);
      alert("Failed to add report");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Report</button>
    </form>
  );
};

export default ReportForm;
