import "./App.css";

import Navbar from "./components/Navbar";
import DashboardPage from "./page/dashboard";
import { Route, Routes } from "react-router";
import ConsumptionData from "./page/division/consuptionData";
import GenerationPage from "./page/division/generationPage";
import ReportPage from "./page/division/reportPage";
import { useEffect } from "react";
import AuroraDyeingUtilities from "./api/filter/utitlis/auroraDyeingUtilities";

function App() {
  useEffect(() => {
    const trend = async (data) => {
      const res = await AuroraDyeingUtilities(data);
      console.log(res);
    };

    trend();
  }, []);

  return (
    <main className="min-h-screen bg-[#070a0e] text-white">
      <Navbar />

      {/* <LoginDialog
        open={openDialog}
        onOpenChange={setOpenDialog}
        onSubmit={handleLogin}
      /> */}

      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/energy" element={<GenerationPage />} />
        <Route path="/energy/consumption" element={<ConsumptionData />} />
        <Route path="/energy/consumption/list" element={<ReportPage />} />
      </Routes>
    </main>
  );
}

export default App;
