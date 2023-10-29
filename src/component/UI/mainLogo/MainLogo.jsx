import style from "./MainLogo.module.scss"
import {ReactComponent as Logo} from "../../../assets/icon/main-logo.svg"
import {Link} from "react-router-dom";



const MainLogo = () => {
  return (
   <Link to="/">
     <Logo className={style.mainLogo}/>
   </Link>
  );
}

export default MainLogo;