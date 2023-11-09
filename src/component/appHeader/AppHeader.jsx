import style from "./AppHeader.module.scss"
import MainLogo from "../UI/mainLogo/MainLogo.jsx";
import NavBar from "../UI/navBar/NavBar.jsx";
import {ReactComponent as PhoneIcon} from "../../assets/icon/phone-icon.svg"



const AppHeader = () => {
  return (<header className={style.header}>
    <div className="container-large">
      <div className={style.wrapper}>
        <div className={style.leftContent}>
          <MainLogo/>

          <NavBar/>
        </div>

        <div className={style.contacts}>
          <span className={style.contactsData}>
            <PhoneIcon/>
           цілодобово
          </span>
          <span>
            +380 (73) 356 21 15
          </span>
        </div>

      </div>

    </div>
  </header>);
}

export default AppHeader;