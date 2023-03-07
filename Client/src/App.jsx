import { createContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import "./App.css";

//Importing Components
import HeaderBar from "./Components/Global Components/HeaderBar";

//Importing page components
import ContactInfoPage from "./Pages/Global pages/ContactsPage";
import LandingPage from "./Pages/Global pages/LandingPage";
import TypeOfOrderPage from "./Pages/Global pages/TypeOfOrderPage";
import ProductSelectionPageKB from "./Pages/Kit route/Buy a Kit/ProductSelectionPage(K)";
import ChoiceBuyOrCreate from "./Pages/Kit route/BuyOrCreate";
import ProductSelectionPageSP from "./Pages/Seprate Products Route/ProductSelctionPage(SP)";

function App() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://65.109.137.46:5000/api")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProductsList(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  console.log(productsList);
  return (
    <div className="App">
      <HeaderBar />
      <Routes>
        <Route path="/" element={<LandingPage productsList={productsList} />} />
        <Route path="/orderType" element={<TypeOfOrderPage />} />

        {/* <=== ! | Separate products routes | ! ===>  */}
        <Route
          path="/productSelectionPageSP"
          element={<ProductSelectionPageSP productsList={productsList} />}
        />
        <Route path="/contactInfoPage" element={<ContactInfoPage />} />

        {/* <=== ! | Kit routes | ! ===>  */}
        <Route path="/buyOrCreate" element={<ChoiceBuyOrCreate />} />
        <Route
          path="/productSelectionPageKb"
          element={<ProductSelectionPageKB productsList={productsList} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
