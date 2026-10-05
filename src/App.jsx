import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import DashboardPage from "./page/dashboard";
import LoginDialog from "./components/login/loginDialog";
import {
  checkConnection,
  getEnergyLog,
  getTrendLog,
  loginToServer,
} from "./api/api";
import {
  ApparelDepartment,
  DyeingDepartment,
  KglDepartment,
  WeavingDepartment,
} from "./api/auroraMetersData";
import { Route, Routes } from "react-router";
import ConsumptionData from "./page/division/consuptionData";
import GenerationPage from "./page/division/generationPage";
import ReportPage from "./page/division/reportPage";

function App() {
  const [openDialog, setOpenDialog] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await checkConnection();

        if (res?.success) {
          setOpenDialog(false);
        } else {
          setOpenDialog(true);
        }
      } catch (error) {
        console.log("Authentication check failed:", error);
        setOpenDialog(true);
      } finally {
        setCheckingAuth(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const getTrendData = async () => {
      try {
        const res = await getTrendLog();
        console.log("trend", res?.trendlog);
        // console.log("trend", res?.trendlog.reduce( (data, sum) => sum + Number(data.instance, 0) || 0) );
      } catch (error) {}
    };

    const getEnergyData = async () => {
      try {
        const { energylog } = await getEnergyLog();
        console.log("energy", energylog);
        console.log(
          "total energy instance",
          energylog.reduce((data, sum) => sum + Number(data.instance, 0) || 0),
        );
      } catch (error) {}
    };

    // getTrendData();
    getEnergyData();

    const DivisionData = async () => {
      try {
        const Apparel = await ApparelDepartment();
        // const Dyeing = await DyeingDepartment();
        // const Weaving = await WeavingDepartment();
        // const deleted = await KglDepartment();
        console.log(Apparel);
        // console.log(Apparel.map((data) => data.instance));
        // console.log(
        //   "Apparel",
        //   Apparel.reduce((sum, data) => sum + Number(data.instance || 0), 0),
        // );
        // console.log("Apparel", Apparel.length);
        // console.log("Dyeing", Dyeing.length);
        // console.log("Weaving", Weaving.length);
        // console.log("deleted", deleted.length);
      } catch (error) {}
    };

    // DivisionData();
  }, []);

  const handleLogin = async (ip) => {
    if (!ip) {
      setOpenDialog(true);
      return;
    }

    try {
      console.log("User IP:", ip);
      const res = await loginToServer(ip);
      console.log("Login response:", res);

      if (res?.success) {
        setOpenDialog(false);
      } else {
        setOpenDialog(true);
        console.log(res?.message || "Credential Error");
      }
    } catch (error) {
      console.log(
        error?.message || "Credential Error Please Submit a Valid IP",
      );

      setOpenDialog(true);
    }
  };

  if (checkingAuth) {
    return (
      <main className="min-h-screen bg-[#070a0e] text-white flex items-center justify-center">
        <div className="text-sm text-gray-400">Checking authentication...</div>
      </main>
    );
  }

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
