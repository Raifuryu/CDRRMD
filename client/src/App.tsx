import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Welcome from "./Welcome";
import FileSystemDashboard from "./pages/Data Bank";
import CBTISLayout from "./pages/Capacity Building and Trainings Information System";
import Training from "./pages/Capacity Building and Trainings Information System/DetailedPage";
import DirectoryLayout from "./pages/Directory";
import MnELayout from "./pages/Monitoring and Evaluation/index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route
            path="file-system-dashboard"
            element={<FileSystemDashboard />}
          />
          <Route path="training" element={<CBTISLayout />} />
          <Route path="training/:trainingId" element={<Training />} />
          <Route path="directory" element={<DirectoryLayout />} />
          <Route path="monitoring-and-evaluation" element={<MnELayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
