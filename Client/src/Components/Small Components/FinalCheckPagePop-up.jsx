//Importin React hooks
import { useState } from "react";

//Importing Material design and material design components
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

//Importing Components
import ProductDisplaySearchBar from "../Context Components/ProductDisplaySearchBar";

export default function PopUpMessage(props) {
  const [searchQuerry, setSearchQuerry] = useState(" ");

  //Importing data and functions from component's props
  const { productList, toggleUp, setToggleUp, handleAddProduct } = props;

  //Setting the search filtering function
  //It takes the user input and filters out the array accordingly
  let filterFunc = [];
  filterFunc =
    searchQuerry !== " " && productList.length > 0
      ? productList.filter((product) =>
          product.ProductName.toLowerCase().includes(searchQuerry.toLowerCase())
        )
      : " ";

  return toggleUp ? (
    <>
      <div className="final-check-page-pop-up-wrapper bg-white shadow-xl">
        <div className="final-check-pop-up-inner-content">
          <div className="final-check-pop-up-top-section">{props.children}</div>
          <div className="final-check-pop-up-main-section">
            <input
              className="page-left-side-search-bar block px-4 py-2 pr-24 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
            focus:outline-none"
              type="text"
              placeholder="Product name here..."
              onChange={(e) => setSearchQuerry(e.target.value)}
            />
            <Icon
              className="absolute ml-72 -mt-10 py-0"
              path={mdiMagnify}
              size={1}
            />
            {Array.isArray(filterFunc) && searchQuerry !== ""
              ? filterFunc
                  .slice(0, 3)
                  .map((product) => (
                    <ProductDisplaySearchBar
                      product={product}
                      addProduct={handleAddProduct}
                      key={product.ProductIndex}
                    />
                  ))
              : " "}
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
