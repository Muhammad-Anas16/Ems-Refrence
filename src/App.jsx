// import { useEffect, useState } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import DashboardPage from "./page/dashboard";
// import { checkConnection } from "./api/api";
// import LoginDialog from "./components/login/loginDialog";

// function App() {
//   const [openDialog, setOpenDialog] = useState(true);
//   useEffect(() => {
//     const data = async () => {
//       const res = await checkConnection();
//       if (!res?.success) {
//         console.log("Mot Login");
//       }
//       setOpenDialog(res?.success ? false : true);
//       console.log(res);
//     };

//     data();
//   }, [openDialog]);

//   const handleLogin = async (ip) => {
//     if (!ip) {
//       setOpenDialog(true);
//       return;
//     }
//     try {
//       console.log("User IP:", ip);
//       const res = await loginToServer(ip);
//       console.log(res);
//     } catch (error) {
//       console.log(error.message || "Credential Error Please Submit a Valid IP");
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#070a0e] text-white">
//       <Navbar />
//       <LoginDialog
//         open={openDialog}
//         // onOpenChange={() => {}}
//         onOpenChange={setOpenDialog}
//         onSubmit={handleLogin}
//       />
//       <DashboardPage />
//     </main>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import DashboardPage from "./page/dashboard";
import LoginDialog from "./components/login/loginDialog";

import { checkConnection, loginToServer } from "./api/api";

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

      <LoginDialog
        open={openDialog}
        onOpenChange={setOpenDialog}
        onSubmit={handleLogin}
      />

      <DashboardPage />
    </main>
  );
}

export default App;
