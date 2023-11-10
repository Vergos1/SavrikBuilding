import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/app/App.jsx'
import {BrowserRouter} from "react-router-dom";
import MaterialCustomConfig from "./style/MaterialUI/MaterialCustomConfig.jsx";
import {ThemeProvider} from "@mui/material";


ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
   <BrowserRouter>
     <ThemeProvider theme={MaterialCustomConfig}>
       <App />
     </ThemeProvider>
   </BrowserRouter>
 </React.StrictMode>)
