import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/index";
import Advertising from "./Pages/Advertising/index";
import Notification from "./Pages/Notifications/index";
import Listing from "./Pages/Listings/index";
import News from "./Pages/News";
import Statistics from "./Pages/Statistics/index";
import UserRepport from "./Pages/User Repport/index";
import Plans from "./Pages/Plans/index";
import Pins from "./Pages/Pins/index";
import Support from "./Pages/Support/index";
import System from "./Pages/System/index";
import Archive from "./Pages/Archive/index";
import PrivacyPolicy from "./Pages/Privacy Policy/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Advertising" element={<Advertising />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Listing" element={<Listing />} />
        <Route path="/News" element={<News />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/UserRepport" element={<UserRepport />} />
        <Route path="/Plans" element={<Plans />} />
        <Route path="/Pins" element={<Pins />} />
        <Route path="/System" element={<System />} />
        <Route path="/Archive" element={<Archive />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
