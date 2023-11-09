import style from './CatalogSection.module.scss';
import 'swiper/css';
import {useRef, useState, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination} from "swiper/modules";
import Product from "./Product/Product.jsx";
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



const productData = [{
  id: "snikersLarge1",
  image: SnikersLarge1,
  title: "Малий комплект 1",
  price: 400,
  description1: "- Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн",
  description2: "- Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)",
  descriptionMain: "Терка гумова призначена для затирання швів при виконанні різноманітних оздоблювальних робіт та при укладанні плитки.",
}, {
  id: "snikersLarge2",
  image: SnikersLarge2,
  title: "Малий комплект 2",
  price: 420,
  description1: "- Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн",
  description2: "- Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)",
  descriptionMain: "Терка гумова призначена для затирання швів при виконанні різноманітних оздоблювальних робіт та при укладанні плитки.",
}, {
  id: "snikersSmall1",
  image: SnikersSmall1,
  title: "Малий комплект 3",
  price: 700,
  description1: "- Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн",
  description2: "- Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)",
  descriptionMain: "Терка гумова призначена для затирання швів при виконанні різноманітних оздоблювальних робіт та при укладанні плитки.",
}, {
  id: "snikersSmall2",
  image: SnikersSmall2,
  title: "Малий комплект 4",
  price: 350,
  description1: "- Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн",
  description2: "- Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)",
  descriptionMain: "Терка гумова призначена для затирання швів при виконанні різноманітних оздоблювальних робіт та при укладанні плитки.",
}, {
  id: "angle1",
  image: Angle1,
  title: "Малий комплект 5",
  price: 650,
  description1: "- Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн",
  description2: "- Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)",
  descriptionMain: "Терка гумова призначена для затирання швів при виконанні різноманітних оздоблювальних робіт та при укладанні плитки.",
}, {
  id: "angle2",
  image: Angle2,
  title: "Малий комплект 6",
  price: 550,
  description1: "- Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн",
  description2: "- Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)",
  descriptionMain: "Терка гумова призначена для затирання швів при виконанні різноманітних оздоблювальних робіт та при укладанні плитки.",
}, {
  id: "largeSet",
  image: LargeSet1,
  title: "Малий комплект 7",
  price: 950,
  description1: "- Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн",
  description2: "- Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)",
  descriptionMain: "Терка гумова призначена для затирання швів при виконанні різноманітних оздоблювальних робіт та при укладанні плитки.",
}, {
  id: "smallSet",
  image: SmallSet1,
  title: "Малий комплект 8",
  price: 550,
  description1: "- Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн",
  description2: "- Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)",
  descriptionMain: "Терка гумова призначена для затирання швів при виконанні різноманітних оздоблювальних робіт та при укладанні плитки.",
}, {
  id: "smallSet2",
  image: SmallSet2,
  title: "Малий комплект 9",
  price: 450,
  description1: "- Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн",
  description2: "- Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)",
  descriptionMain: "Терка гумова призначена для затирання швів при виконанні різноманітних оздоблювальних робіт та при укладанні плитки.",
}, {
  id: "combs",
  image: Combs,
  title: "Малий комплект 10",
  price: 850,
  description1: "- Малий комплект Кутова терка 225мм + човник або великий снікерс - 850грн",
  description2: "- Працюємо по повній передплаті, або накладним платежем (при перредоплаті 200грн)",
  descriptionMain: "Терка гумова призначена для затирання швів при виконанні різноманітних оздоблювальних робіт та при укладанні плитки.",
}]
const CatalogSection = () => {
  // pagination
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // product
  const [productOpen, setProductOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  console.log(currentProduct);

  const productHandler = (product) => {
    setCurrentProduct(product);
    if (productOpen) {
      setProductOpen(false);
    }
  }

  useEffect(() => {
    setProductOpen(currentProduct != null);
  }, [currentProduct]);

  return (<section id="catalog" className={style.catalog}>
    <div className="container">
      <div className={style.wrapper}>
        <h2 className={style.title}>Каталог товарів</h2>
        {!productOpen ? (<>
          <Swiper
           modules={[Navigation, Pagination, A11y]}
           spaceBetween={30}
           slidesPerView={4}
           navigation={{
             prevEl: prevRef.current, nextEl: nextRef.current,
           }}
           onBeforeInit={(swiper) => {
             swiper.params.navigation.prevEl = prevRef.current;
             swiper.params.navigation.nextEl = nextRef.current;
             swiper.navigation.init();
             swiper.navigation.update();
           }}
           onSlideChange={() => console.log("slide change")}//!console.log(debug)
           onSwiper={(swiper) => console.log(swiper)} //!console.log(debug)
          >
            <>
              {productData.map((item) => (
               <SwiperSlide key={item.id} onClick={() => productHandler(item)}>
                 <div className={style.hiddenSlideWrapper}>
                   <img src={item.image} alt="snikers small"/>
                   <div className={style.hiddenSlide}>
                     <h4 className={style.hiddenTitle}>{item.title}</h4>
                     <p className={style.hiddenDesc}>
                       {item.description1}
                     </p>
                     <p className={style.hiddenDesc}>
                       {item.description2}
                     </p>
                   </div>
                 </div>
               </SwiperSlide>
              ))}
            </>
          </Swiper>
          <div className={style.buttonWrapper}>
            <button ref={prevRef} className={style.prevButton}>
              <PrevIcon/>
            </button>
            <button ref={nextRef} className={style.nextButton}>
              <NextIcon/>
            </button>
          </div>
        </>) : (<Product productHandler={productHandler} currentProduct={currentProduct}/>)}
      </div>
    </div>
  </section>)
}

export default CatalogSection;