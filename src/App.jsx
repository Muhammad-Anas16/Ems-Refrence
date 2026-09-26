// import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import DashboardPage from "./page/dashboard";

function App() {
  return (
    <main className="min-h-screen bg-[#070a0e] text-white">
      <Navbar />
      <DashboardPage />
    </main>
  );
}

export default App;
