import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex">
          <Navbar />
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div>
            <Outlet />
          </div>
        </div>
        <div className="flex">
          <article className="prose-l">
            <h6>
              &copy;2024 City Disaster Risk Reduction and Management Department,
              All Rights Reserved.
            </h6>
          </article>
        </div>
      </div>
    </>
  );
}
