import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Welcome from "./Welcome";
import FileSystemDashboard from "./components/File System/Dashboard";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
