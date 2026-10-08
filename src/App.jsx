import "./App.css";

import Navbar from "./components/Navbar";
import DashboardPage from "./page/dashboard";
import { Route, Routes } from "react-router";
import ConsumptionData from "./page/consuptionData";
import ReportPage from "./page/reportPage";
import TestDashboard from "./page/textPage";
import PerDepartmentPage from "./page/perDepartmentPage";

function App() {
  return (
    <main className="min-h-screen bg-[#070a0e] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />

        <Route path="/:divisionName">
          <Route index element={<ConsumptionData />} />

          <Route path="list" element={<PerDepartmentPage />} />

          <Route path=":department" element={<PerDepartmentPage />} />

          <Route path=":department/list" element={<ReportPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
