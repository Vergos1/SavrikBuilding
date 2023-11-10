import style from "./CalculationResultModal.module.scss";
import React from 'react';



const CalculationResultModal = ({price, tabName, handler}) => {

  return (
   <div className={style.wrapper}>
     <div className={style.modal}>
       <p className={style.title}>
         Результат обчислення ціни
       </p>
       <p className={style.description}>
         {tabName}: {" "}
         {
          price !== null && <span className={style.price}>{price} грн</span>
         }
       </p>
       <button onClick={handler} type="button" className={style.buttonClose}>
         Закрити
       </button>
     </div>
   </div>
  )
};
export default CalculationResultModal;