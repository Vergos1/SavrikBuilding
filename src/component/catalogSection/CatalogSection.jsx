import style from './CatalogSection.module.scss';
import 'swiper/css';
import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, FreeMode, Navigation, Pagination} from "swiper/modules";
import SnikersSmall1 from "../../assets/image/snikers-small.jpg";
import SnikersSmall2 from "../../assets/image/snikers-small2.jpg";
import SnikersLarge1 from "../../assets/image/snikers-large.jpg";
import SnikersLarge2 from "../../assets/image/snikers-large2.jpg";
import Angle1 from "../../assets/image/angle1.jpg";
import Angle2 from "../../assets/image/angle2.jpg";
import LargeSet1 from "../../assets/image/large-set.jpg";
import SmallSet1 from "../../assets/image/small-set.jpg";
import SmallSet2 from "../../assets/image/small-set2.jpg";
import Combs from "../../assets/image/combs.jpg";
import {ReactComponent as PrevIcon} from "../../assets/icon/prev.svg";
import {ReactComponent as NextIcon} from "../../assets/icon/next.svg";



const CatalogSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
   <section id="catalog" className={style.catalog}>
     <div className="container">
       <div className={style.wrapper}>
         <h2 className={style.title}>Каталог товарів</h2>
         <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
          }}
          onSlideChange={() => console.log("slide change")}//!console.log(debug)
          onSwiper={(swiper) => console.log(swiper)} //!console.log(debug)
         >
           <SwiperSlide>
             <img src={SnikersSmall2} alt="snikers small"/>
             <div className={style.hiddenSlide}>
               <h4 className={style.hiddenTitle}>Малий комплект</h4>
               <p className={style.hiddenDesc}>
                 - Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн <br/>
                 - Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)
               </p>
             </div>
           </SwiperSlide>
           <SwiperSlide>
             <img src={SnikersLarge1} alt="snikers large"/>
             <div className={style.hiddenSlide}>
               <h4 className={style.hiddenTitle}>Малий комплект</h4>
               <p className={style.hiddenDesc}>
                 - Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн <br/>
                 - Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)
               </p>
             </div>
           </SwiperSlide>
           <SwiperSlide>
             <img src={Angle1} alt="angle"/>
             <div className={style.hiddenSlide}>
               <h4 className={style.hiddenTitle}>Малий комплект</h4>
               <p className={style.hiddenDesc}>
                 - Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн <br/>
                 - Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)
               </p>
             </div>
           </SwiperSlide>
           <SwiperSlide>
             <img src={LargeSet1} alt="large set"/>
             <div className={style.hiddenSlide}>
               <h4 className={style.hiddenTitle}>Малий комплект</h4>
               <p className={style.hiddenDesc}>
                 - Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн <br/>
                 - Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)
               </p>
             </div>
           </SwiperSlide>
           <SwiperSlide>
             <img src={SmallSet1} alt="small set"/>
             <div className={style.hiddenSlide}>
               <h4 className={style.hiddenTitle}>Малий комплект</h4>
               <p className={style.hiddenDesc}>
                 - Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн <br/>
                 - Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)
               </p>
             </div>
           </SwiperSlide>
           <SwiperSlide>
             <img src={SmallSet2} alt="small set"/>
             <div className={style.hiddenSlide}>
               <h4 className={style.hiddenTitle}>Малий комплект</h4>
               <p className={style.hiddenDesc}>
                 - Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн <br/>
                 - Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)
               </p>
             </div>
           </SwiperSlide>
           <SwiperSlide>
             <img src={Combs} alt="combs"/>
             <div className={style.hiddenSlide}>
               <h4 className={style.hiddenTitle}>Малий комплект</h4>
               <p className={style.hiddenDesc}>
                 - Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн <br/>
                 - Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)
               </p>
             </div>
           </SwiperSlide>
         </Swiper>
         <div className={style.buttonWrapper}>
           <button ref={prevRef} className={style.prevButton}>
             <PrevIcon/>
           </button>
           <button ref={nextRef} className={style.nextButton}>
             <NextIcon/>
           </button>
         </div>
       </div>
     </div>
   </section>
  )
}

export default CatalogSection;