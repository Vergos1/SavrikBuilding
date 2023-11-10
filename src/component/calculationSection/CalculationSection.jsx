import style from './CalculationSection.module.scss';
import {useState} from "react";
import DecoratingTab from "./Tab/DecoratingTab.jsx";
import PaintingTab from "./Tab/PaintingTab.jsx";
import PlasteringTab from "./Tab/PlasteringTab.jsx";
import {ReactComponent as DecoratingIcon} from '../../assets/icon/decorating.svg';
import {ReactComponent as PlasteringIcon} from '../../assets/icon/plastering.svg';
import {ReactComponent as PaintingIcon} from '../../assets/icon/painting.svg';
import calculationPrice from "../../utils/calculationPrice.js";



const buttonData = [
  {
    id: "plastering",
    icon: <PlasteringIcon/>,
    title: "Штукатурні роботи",
  },
  {
    id: "decorating",
    icon: <DecoratingIcon/>,
    title: "Малярні роботи",
  },
  {
    id: "painting",
    icon: <PaintingIcon/>,
    title: "Покрасочні роботи",
  },
]
const CalculationSection = () => {
  const [activeTab, setActiveTab] = useState("plastering");

  return (
   <section id="calculation" className={style.calculation}>
     <div className="container">
       <div className={style.wrapper}>
         <h2>Розрахунок ціни замовлення</h2>
         <div className={style.tabWrapper}>
           {buttonData.map((button) => (
            <button
             key={button.id}
             className={`${style.tabButton}  ${activeTab === button.id && style.active}`}
             onClick={() => setActiveTab(button.id)}
            >
              {button.icon}
              {button.title}
            </button>
           ))}
         </div>
         <div className={style.contentWrapper}>
           {
             activeTab === "decorating" ?
              <DecoratingTab/> :
              activeTab === "plastering" ?
               <PlasteringTab/> :
               <PaintingTab/>
           }
         </div>
       </div>
     </div>
   </section>
  )
}

export default CalculationSection;