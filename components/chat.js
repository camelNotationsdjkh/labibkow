import styles from "../styles/chat.module.css"
import Image from "next/image"


export default function Chat(){
    return (
        <>
        <DisplayBox />
        <SelectBox />
        </>
    )
}

function SelectBox(){
    return(
        <>
            <div className={styles.flexCon}>
                <div className={styles.slider}>
                    <div className={styles.btnActive}>Who am I?</div>
                    <div>Favourite Color</div>
                    <div>Future goals</div>
                    <div key="FavAnimal">Favourite animal</div>

                </div>
                <Image id={styles.sliderBtn} 
                src={require("../public/arrowRight.svg")}
                alt="Github Logo with link to my github"
                width={44}
                height={44} />
            </div>
        </>
    )
}

function DisplayBox(){
    return (
        <>
        <div className={styles.flexDis}>
            <div id={styles.response}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit porro nobis incidunt corporis a placeat  sapiente ratione nemo, ipsa unde eius vero iusto, eaque et! Suscipit minus consequuntur ad atque.  </div>
            <div id={styles.imgSlide}>Where my photos will go</div>
        </div>
        </>
    )
}