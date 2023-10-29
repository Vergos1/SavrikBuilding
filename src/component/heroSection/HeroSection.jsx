import style from './HeroSection.module.scss';



const HeroSection = () => {
  return (
   <section id="hero" className={style.hero}>
     <div className="container">
       <h1 className={style.title}>
         <span className={`${style.titleText} ${style.textWhite}`}>короче</span>
         <span className={`${style.titleText} ${style.textOrange}`}>тєма така</span>
       </h1>
     </div>
   </section>
  )
}

export default HeroSection;