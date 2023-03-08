//Importing React hooks
import { useEffect, useState } from "react";

//Importing React-router elements and components
import { Navigate, Route, Routes } from "react-router";

//Importing styling sheet
import "./App.css";

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
  const [productsVarList, setProductsVarList] = useState([]);

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

    const sendPostRequest = () => {
      productsList.forEach((element) => {
        const getVariations = async () => {
          await fetch("http://65.109.137.46:5000/apivar", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ProductIndex: element.ProductIndex,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.length > 0) {
                setProductsVarList((prevList) => [...prevList, data]);
                console.log(data);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        };
        getVariations();
      });
    };
    sendPostRequest();

    // const sendPostRequest = () => {
    //   const promises = productsList.map((element) => {
    //     return fetch("http://65.109.137.46:5000/apivar", {
    //       method: "POST",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         ProductIndex: element.ProductIndex,
    //       }),
    //     }).then((response) => response.json());
    //   });
    //   Promise.all(promises).then((data) => {
    //     if (data.length > 0) {
    //       setProductsVarList((prevList) => [...prevList, data]);
    //       console.log(data);
    //     }
    //   });
    // };
    // sendPostRequest();

    console.log(productsVarList.length);
  }, []);

  //
  ////
  //////
  console.log(productsList);
  return (
    <div className="App">
      <HeaderBar />
      <Routes>
        <Route path="/" element={<LandingPage productsList={productsList} />} />
        <Route path="/orderType" element={<TypeOfOrderPage />} />

        {/* <==== ! | Separate products routes | ! ====>  */}
        <Route
          path="/productSelectionPageSP"
          element={
            <ProductSelectionPageSP
              productsVarList={productsVarList}
              productsList={productsList}
            />
          }
        />
        <Route path="/contactInfoPage" element={<ContactInfoPage />} />

        {/* <==== ! | Kit routes | ! ====>  */}
        <Route path="/buyOrCreate" element={<ChoiceBuyOrCreate />} />
        <Route
          path="/productSelectionPageKb"
          element={
            <ProductSelectionPageKB
              productsVarList={productsVarList}
              productsList={productsList}
            />
          }
        />
        <Route
          path="/productSelectionPageKC"
          element={
            <ProductSelectionPageKC
              productsVarList={productsVarList}
              productsList={productsList}
            />
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
