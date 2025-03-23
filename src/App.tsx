import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EventsPage from "./pages/EventsPage";
import NotFoundPage from "./pages/NotFoundPage";
import DonationPage from "./pages/DonationPage";
import RafflePage from "./pages/RafflePage";
import Navbar from "./components/Navbar";
import StorePage from "./pages/StorePage";

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/donate"} element={<DonationPage />} />
        <Route path={"/events"} element={<EventsPage />} />
        <Route path={"/store"} element={<StorePage />} />
        <Route path={"/raffle"} element={<RafflePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
