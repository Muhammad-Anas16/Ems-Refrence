// import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import DashboardPage from "./page/dashboard";

function App() {
  return (
    <main className="bg-[#070A0E] w-screen h-screen overflow-hidden text-white">
      <Navbar />
      <DashboardPage />
    </main>
  );
}

export default App;
