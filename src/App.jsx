import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import DashboardPage from "./page/dashboard";
import { checkConnection } from "./api/api";
import LoginDialog from "./components/login/loginDialog";

function App() {
  const [openDialog, setOpenDialog] = useState(true);
  useEffect(() => {
    const data = async () => {
      const res = await checkConnection();
      // setOpenDialog(res?.success);
      console.log(res?.success ? "User Authenticated" : "Please Login");
    };

    data();
  }, [openDialog]);

  const handleLogin = (ip) => {
    if (ip) {
      setOpenDialog(false);
    }
    console.log("User IP:", ip);
  };

  return (
    <main className="min-h-screen bg-[#070a0e] text-white">
      <Navbar />
      <LoginDialog
        open={openDialog}
        // onOpenChange={() => {}}
        onOpenChange={setOpenDialog}
        onSubmit={handleLogin}
      />
      <DashboardPage />
    </main>
  );
}

export default App;
