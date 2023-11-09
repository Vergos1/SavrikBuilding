import style from "./StagesConstructionSection.module.scss";
import React, {useState} from 'react';
import {
  StagesTabFifth,
  StagesTabFirst,
  StagesTabFourth,
  StagesTabSecond, StagesTabSixth,
  StagesTabThird,
} from "./Tab/StagesConstructionTab.jsx";



const tabs = [
  <StagesTabFirst/>,
  <StagesTabSecond/>,
  <StagesTabThird/>,
  <StagesTabFourth/>,
  <StagesTabFifth/>,
  <StagesTabSixth/>,
]
const buttonData = [
  {
    id: 1,
    count: "01",
    title: "Підготовка поверхні",
  },
  {
    id: 2,
    count: "02",
    title: "Нанесення першого шару штукатурки",
  },
  {
    id: 3,
    count: "03",
    title: "Нанесення другого шару штукатурки",
  },
  {
    id: 4,
    count: "04",
    title: "Шліфування",
  },
  {
    id: 5,
    count: "05",
    title: "Грунтування",
  },
  {
    id: 6,
    count: "06",
    title: "Остаточне оздоблення",
  },
]
const StagesConstructionSection = (props) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
   <section id="stages" className={style.stages}>
     <div className={`${style.container} container-large`}>
       <h2 className={style.title}>Этапи штукатурки</h2>
       <div className={style.wrapper}>
         <div className={style.leftColumn}>
           {buttonData.map((button, index) => (
            <button type="button"
                    className={`${style.buttonTab} ${activeTab === button.id ? style.active : ''}`} key={button.id}
                    onClick={() => setActiveTab(button.id)}>
              <span className={style.countTab}>{button.count}</span>
              {button.title}
            </button>
           ))}
         </div>
         {activeTab ? (
          <div className={style.rightColumn}>
            <div className={style.viewTab}>
              {activeTab && tabs[activeTab - 1]}
            </div>
          </div>
         ) : null}
       </div>
     </div>
   </section>
  );
};

export default StagesConstructionSection;