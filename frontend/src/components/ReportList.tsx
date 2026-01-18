import React from "react";

interface Report {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

interface ReportListProps {
  reports: Report[];
}

const ReportList: React.FC<ReportListProps> = ({ reports }) => {
  return (
    <div>
      {reports.map((report) => (
        <div key={report.id} style={{ border: "1px solid #ccc", margin: "5px", padding: "5px" }}>
          <h3>{report.title}</h3>
          <p>{report.description}</p>
          <small>{new Date(report.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default ReportList;
