import styles from "../styles/chat.module.css"
import Image from "next/image"
import Typed from 'typed.js';
import { useRef, useEffect, useState } from "react";
import {dict} from '../public/dict.js';


export default function Chat(){
    let [strArr, setArr] = useState(['Hello, world!', 'Welcome to my website 🐪 !']);
    let sliderEle = [];
    const typedRef = useRef(null);

    //Iterate through key values in dictionary
    for(let valKey in dict){
        //sliderEle.push(<div key={valKey} onClick={updateStr}>{valKey}</div>)
        sliderEle.push(
            <BtnComp key={valKey} keyVal={valKey} onClick={() => {
                setArr(dict[valKey].theStrArr)
            }} />
        );
    }

    useEffect(() => {
        const options = {
          strings: strArr,
          typeSpeed: 50,
          backSpeed: 30,
          loop: false
        };
        
        const typed = new Typed(typedRef.current, options);
      
        return () => {
          typed.destroy();
        };
    }, [strArr]);

    return (
        <>
        <div className={styles.flexDis}>
            <div id={styles.response}>
                <div ref={typedRef}></div>
                
            </div>
            <div id={styles.imgSlide}>
                <Image id={styles.displayImg} 
                src={require("../public/profile.jpg")}
                alt="Github Logo with link to my github"
                width={340}
                height={340} />
            </div>
        </div>

        <div className={styles.flexCon}>
            <div className={styles.slider}>
                {sliderEle}
                <Image id={styles.sliderBtn} 
                src={require("../public/arrowRight.svg")}
                alt="Github Logo with link to my github"
                width={44}
                height={44} />
            </div>
            
        </div>
        </>
    )
}

function BtnComp({ keyVal, onClick }){
    return (
        <>
            <div onClick={onClick}>{keyVal}</div>
        </>
    )
}