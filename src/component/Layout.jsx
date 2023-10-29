import { Outlet } from "react-router-dom";
import AppHeader from "./appHeader/AppHeader.jsx";

const Layout = () => {
  return (
   <>
     <AppHeader />
     <main className="main">
       <Outlet />
     </main>
     {/*<AppFooter />*/}
   </>
  );
};

export default Layout;
