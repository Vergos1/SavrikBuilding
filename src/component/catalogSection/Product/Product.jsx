import style from './Product.module.scss';
import 'swiper/css';
import {useParams} from "react-router-dom";



const Product = ({currentProduct, productHandler}) => {
  return (
   <>
     <div className={style.item}>
       <div className={style.leftColumn}>
         <img className={style.image} src={currentProduct.image} alt="product image"/>
       </div>
       <div className={style.rightColumn}>
         <div className={style.content}>
           <h4 className={style.title}>{currentProduct.title}</h4>
           <div className={style.contentDesc}>
             <div>
               <p className={style.description}>
                 {currentProduct.description1}
               </p>
               <p className={style.description}>
                 {currentProduct.description2}
               </p>
             </div>
             <p className={style.description}>
               {currentProduct.descriptionMain}
             </p>
           </div>
           <span className={style.price}>{currentProduct.price}грн</span>
         </div>
         <div className={style.buttonsWrapper}>
           <button className={style.buttonBack} type="button" onClick={() => productHandler(null)}>
             Назад
           </button>
           <button className={style.buttonBuy} type="button" onClick={() => productHandler(null)}>
             Купити
           </button>
         </div>
       </div>
     </div>
   </>
  )
}

export default Product;