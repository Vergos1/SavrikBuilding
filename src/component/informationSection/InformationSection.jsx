import style from './InformationSection.module.scss';
import {ReactComponent as UkraineMap} from "../../assets/image/ua-map.svg";
import {ReactComponent as LogoBig} from "../../assets/icon/main-logo-big.svg";



const CatalogSection = () => {

  return (
   <section id="information" className={style.information}>
     <div className="container">
       <div className={style.wrapper}>
         <div className={style.leftColumn}>
           <UkraineMap/>
         </div>
         <div className={style.rightColumn}>
           <LogoBig/>
           <h2 className={style.title}>
             Відправка товарів по всій <br/>
             <span className={style.titleOrange}>Україні та країнах Європи</span>
           </h2>
           <ul className={style.list}>
             <li className={style.listItem}>Фірмові терочки</li>
             <li className={style.listItem}>Фірмові насадки</li>
             <li className={style.listItem}>Фірмові речі</li>
             <li className={style.listItem}>Фірмові наклейки</li>
           </ul>
         </div>
       </div>
     </div>
   </section>
  )
}

export default CatalogSection;