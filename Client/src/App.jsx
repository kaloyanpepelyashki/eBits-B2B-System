import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import HeaderBar from "./Components/Global Components/HeaderBar";
import ContactInfoPage from "./Pages/Global pages/ContactsPage";
import LandingPage from "./Pages/Global pages/LandingPage";
import TypeOfOrderPage from "./Pages/Global pages/TypeOfOrderPage";
import ProductSelectionPageSP from "./Pages/Seprate Products Route/ProductSelctionPage(SP)";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/orderType" element={<TypeOfOrderPage />} />
        <Route
          path="/productSelectionPageSP"
          element={<ProductSelectionPageSP />}
        />
        <Route path="/contactInfoPage" element={<ContactInfoPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
