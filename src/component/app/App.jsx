import "../../style/style.scss";
import {Route, Routes} from "react-router-dom";
import HomePage from "../../pages/HomePage.jsx";
import Layout from "../Layout.jsx";
import CatalogSection from "../catalogSection/CatalogSection.jsx";
import Product from "../catalogSection/Product/Product.jsx";



function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
