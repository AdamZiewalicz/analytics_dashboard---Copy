import React, { useEffect, useState } from "react";
import api from "./api";
import ReportForm from "./components/ReportForm";
import ReportList from "./components/ReportList";
import './index.css';

interface Report {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

const App: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);

  const fetchReports = async () => {
    try {
      const response = await api.get("/reports");
      setReports(response.data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div>
      <div className="bg-gray-500">Test</div>
      <h1>Analytics Dashboard</h1>
      <ReportForm onReportAdded={fetchReports} />
      <ReportList reports={reports} />
    </div>
  );
};

export default App;
