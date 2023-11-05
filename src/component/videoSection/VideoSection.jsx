import style from './VideoSection.module.scss';
import {Link} from "react-router-dom";
import {ReactComponent as PlayIcon} from '../../assets/icon/play-icon.svg';


const VideoSection = () => {
  return (
   <section id="video" className={style.video}>
     <div className="container">
       <div className={style.wrapper}>
         <button className={style.buttonPlay}>
           <PlayIcon/>
         </button>
         <div className={style.titleItem}>
           <h3>детально про товар</h3>
           <p className={style.description}>
             Огляд товару
           </p>
         </div>
         <Link to="/" className={style.link}>дивитися в tik-tok</Link>
       </div>
     </div>
   </section>
  )
}

export default VideoSection;