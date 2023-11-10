import style from './CalculationTab.module.scss';
import React, {useEffect, useRef, useState} from 'react';
import {CustomSelect} from "../../UI/Select/CustomSelect.jsx";
import {FoundationData, WallsData} from "../../../data/calculationData/calculationData.js";
import calculationPrice from "../../../utils/calculationPrice.js";
import CalculationResultModal from "../Modal/CalculationResultModal.jsx";



const PlasteringTab = () => {
  const [inputWidthValue, setInputWidthValue] = useState(0);
  const [inputLengthValue, setInputLengthValue] = useState(0);
  const [inputHeightValue, setInputHeightValue] = useState(0);
  const [inputThicknessValue, setInputThicknessValue] = useState(0);
  const [price, setPrice] = useState(null);
  //результат обчислення
  const [openModal, setOpenModal] = useState(false);
  //відкриття модалки

  useEffect(() => {
    if (openModal === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [openModal]);
  //блокування скролу при відкритті модалки

  const handlerModal = () => {
    setOpenModal(!openModal);
  };

  const handleCalculationClick = () => {
    handlerModal();
    const calculated = calculationPrice(
     parseFloat(inputWidthValue),
     parseFloat(inputLengthValue),
     parseFloat(inputHeightValue),
     parseFloat(inputThicknessValue),
    );
    setPrice(calculated);
  };

  return (
   <>
     <div className={style.item}>
       <h3 className={style.title}>Габарити будівлі</h3>
       <div className={style.inputWrapper}>
         <label htmlFor="input-width">Ширина:</label>
         <div className={style.inputGroup}>
           <input
            id="input-width"
            className={style.input}
            // placeholder="Введіть ширину"
            type="number"
            onChange={(e) => setInputWidthValue(e.target.value)}
           />
           <span className={style.inputAddon}>м</span>
         </div>
       </div>
       <div className={style.inputWrapper}>
         <label htmlFor="input-length">Довжина:</label>
         <div className={style.inputGroup}>
           <input
            id="input-length"
            className={style.input}
            // placeholder="Введіть довжину"
            type="number"
            onChange={(e) => setInputLengthValue(e.target.value)}
           />
           <span className={style.inputAddon}>м</span>
         </div>
       </div>
       <div className={style.inputWrapper}>
         <label htmlFor="input-height">Висота:</label>
         <div className={style.inputGroup}>
           <input
            id="input-height"
            className={style.input}
            // placeholder="Введіть висоту"
            type="number"
            onChange={(e) => setInputHeightValue(e.target.value)}
           />
           <span className={style.inputAddon}>м</span>
         </div>
       </div>
     </div>
     <div className={style.item}>
       <h3 className={style.title}>Фундамент</h3>
       {FoundationData.map((selectData) => (
        <CustomSelect
         key={selectData.id}
         label={selectData.label}
         options={selectData.options}
         defaultValue={selectData.defaultValue}
        />
       ))}
     </div>
     <div className={style.item}>
       <h3 className={style.title}>Стіни</h3>
       {WallsData.map((selectData) => (
        <CustomSelect
         key={selectData.id}
         label={selectData.label}
         options={selectData.options}
         defaultValue={selectData.defaultValue}
        />
       ))}
       <div className={style.inputWrapper}>
         <label htmlFor="input-thickness">Товщина:</label>
         <div className={style.inputGroup}>
           <input
            id="input-thickness"
            className={style.input}
            // placeholder="Введіть товщину"
            type="number"
            onChange={(e) => setInputThicknessValue(e.target.value)}
           />
           <span className={style.inputAddon}>мм</span>
         </div>
       </div>
     </div>
     <button onClick={handleCalculationClick}>розрахувати ціну</button>
     {/*{price !== null && <span>цена: {price}грн</span>}*/}
     {openModal && <CalculationResultModal price={price} tabName="Штукатурні роботи" handler={handlerModal}/>}
   </>
  )
};

export default PlasteringTab;