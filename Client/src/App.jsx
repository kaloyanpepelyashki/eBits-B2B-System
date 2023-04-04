//Importing React hooks
import { useEffect, useState } from "react";

//Importing React-router elements and components
import { Navigate, Route, Routes } from "react-router";

//Importing MUI elements, dependencies and components
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

//Importing styling sheet
import "./App.css";

//Importing Context components
import { ShoppingCartProvider } from "./Components/Context Components/ShoppingCartFuncContext";
import { ContactInfoContProvider } from "./Components/Context Components/ContactsInformationContext";

//Importing Components
import HeaderBar from "./Components/Global Components/HeaderBar";

//Importing Page - components
import ContactInfoPage from "./Pages/Global pages/ContactsPage";
import LandingPage from "./Pages/Global pages/LandingPage";
import TypeOfOrderPage from "./Pages/Global pages/TypeOfOrderPage";
import ProductSelectionPageKB from "./Pages/Kit route/Buy a Kit/ProductSelectionPage(K)";
import ChoiceBuyOrCreate from "./Pages/Kit route/BuyOrCreate";
import ProductSelectionPageKC from "./Pages/Kit route/Compose a Kit/ProductSelectionPage";
import ProductSelectionPageSP from "./Pages/Seprate Products Route/ProductSelctionPage(SP)";
import FinalCheckPage from "./Pages/Global pages/FinalCheckPage";
import ContactsPageKC from "./Pages/Kit route/Compose a Kit/ContactsPageComposeAKit";

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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ContactInfoContProvider>
          <ShoppingCartProvider>
            <Routes>
              <Route
                path="/"
                element={<LandingPage productsList={productsList} />}
              />
              <Route path="/orderType" element={<TypeOfOrderPage />} />
              <Route
                path="/finalChackPage"
                element={<FinalCheckPage productList={productsList} />}
              />
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

              {/* <--- ! | Kit Create route | ! --->  */}

              <Route
                path="/productSelectionPageKC"
                element={<ProductSelectionPageKC productsList={productsList} />}
              />
              <Route
                path="/contactInfoCreatedKit"
                element={<ContactsPageKC />}
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </ShoppingCartProvider>
        </ContactInfoContProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
