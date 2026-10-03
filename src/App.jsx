import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import DashboardPage from "./page/dashboard";
import { checkConnection } from "./api/api";

function App() {
  useEffect(() => {
    const data = async () => {
      const res = await checkConnection();
      console.log(res?.success ? "User Authenticated " : "Please Login");
    };

    data();
  }, []);

  return (
    <main className="min-h-screen bg-[#070a0e] text-white">
      <Navbar />
      <DashboardPage />
    </main>
  );
}

export default App;
