import style from "./NavBar.module.scss";
import {Link} from "react-router-dom";



const NavBar = ({secondClass}) => {
  return (
   <nav>
     <ul className={`${secondClass} ${style.navItems}`}>
       <li>ОГЛЯД</li>
       <li>КАТАЛОГ</li>
       <li>ДОСТАВКА</li>
       <li>КОНТАКТИ</li>
       <li>КУПИТИ</li>
     </ul>
   </nav>
  );
}

export default NavBar;