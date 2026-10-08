import "./App.css";

import Navbar from "./components/Navbar";
import DashboardPage from "./page/dashboard";
import { Route, Routes } from "react-router";
import ConsumptionData from "./page/division/consuptionData";
import ReportPage from "./page/division/reportPage";
import TestDashboard from "./page/textPage";

function App() {
  return (
    <main className="min-h-screen bg-[#070a0e] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        {/* <Route path="/" element={<TestDashboard />} /> */}

        <Route path="/:divisionName">
          <Route index element={<ConsumptionData />} />
          <Route path="/:divisionName/list" element={<ReportPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
