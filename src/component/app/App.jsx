import "../../style/style.scss";
import {Route, Routes} from "react-router-dom";
import HomePage from "../../pages/HomePage.jsx";
import Layout from "../Layout.jsx";




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
