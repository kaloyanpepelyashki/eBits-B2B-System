//Importing React hooks
import { useEffect, useState } from "react";

//Importing React-router elements and components
import { Navigate, Route, Routes } from "react-router";

//Importing styling sheet
import "./App.css";
import { ShoppingCartProvider } from "./Components/Context Components/ShoppingCartFuncContext";

//Importing Components
import HeaderBar from "./Components/Global Components/HeaderBar";

//Importing page components
import ContactInfoPage from "./Pages/Global pages/ContactsPage";
import LandingPage from "./Pages/Global pages/LandingPage";
import TypeOfOrderPage from "./Pages/Global pages/TypeOfOrderPage";
import ProductSelectionPageKB from "./Pages/Kit route/Buy a Kit/ProductSelectionPage(K)";
import ChoiceBuyOrCreate from "./Pages/Kit route/BuyOrCreate";
import ProductSelectionPageKC from "./Pages/Kit route/Compose a Kit/ProductSelectionPage";
import ProductSelectionPageSP from "./Pages/Seprate Products Route/ProductSelctionPage(SP)";

function App() {
  //Fetching data from the server
  //////
  ////
  //
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://65.109.137.46:5000/api")
        .then((response) => response.json())
        .then((data) => {
          setProductsList(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  //
  ////
  //////
  return (
    <div className="App">
      <HeaderBar />
      <ShoppingCartProvider>
        <Routes>
          <Route
            path="/"
            element={<LandingPage productsList={productsList} />}
          />
          <Route path="/orderType" element={<TypeOfOrderPage />} />
          {/* <==== ! | Separate products routes | ! ====>  */}
          <Route
            path="/productSelectionPageSP"
            element={<ProductSelectionPageSP productsList={productsList} />}
          />
          <Route path="/contactInfoPage" element={<ContactInfoPage />} />
          {/* <==== ! | Kit routes | ! ====>  */}
          <Route path="/buyOrCreate" element={<ChoiceBuyOrCreate />} />
          <Route
            path="/productSelectionPageKb"
            element={<ProductSelectionPageKB productsList={productsList} />}
          />
          <Route
            path="/productSelectionPageKC"
            element={<ProductSelectionPageKC productsList={productsList} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
