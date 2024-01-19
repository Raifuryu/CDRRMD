import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Welcome from "./Welcome";
import FileSystemDashboard from "./components/File System/Dashboard";
import CBTISLayout from "./components/CBTISLayout";
import DirectoryLayout from "./components/DirectoryLayout";

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
          <Route path="directory" element={<DirectoryLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
