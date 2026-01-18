import axios from "axios";

const api = axios.create({
 baseURL: "http://localhost:5000/api"
});

// Fetch all reports
export const fetchReports = async () => {
  const response = await api.get("/reports");
  return response.data; // Axios wraps the data in `.data`
};

// Create a new report
export const createReport = async (report: { title: string; description: string }) => {
  const response = await api.post("/reports", report);
  return response.data;
};

export const addReport = async (report: { title: string; description: string }) => {
  const response = await api.post("/reports", report);
  return response.data; // this is the newly created report
};

export default api;
