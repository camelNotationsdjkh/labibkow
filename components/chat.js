import styles from "../styles/chat.module.css"
import Image from "next/image"
import Typed from 'typed.js';
import { useRef, useEffect, useState } from "react";
import {dict} from '../public/home/dict.js';
import { createRoot } from 'react-dom/client';


export default function Chat(){
    let [curKey, setKey] = useState("Who am I?");
    let [strArr, setArr] = useState(dict[curKey].theStrArr); //State that keeps track of what Typed obj should type
    let [isBtnAct, setBtnAct] = useState(0); //Sets the button to active or not
    let sliderEle = [];
    let disImg = [];
    const typedRef = useRef(null);
    const imgRef = useRef(null);

    //Iterate through key values in dictionary
    for(let valKey in dict){
        //The boolean condition that checks what button is
        //Currently active
        const isActive = (strArr === dict[valKey].theStrArr);

        sliderEle.push(
            <BtnComp key={valKey} keyVal={valKey} isActive={isActive} onClick={() => {
                setKey(valKey);
                setArr(dict[valKey].theStrArr);
            }} />
        );
    }


    /*Use effect hook is used for adding dynamic feautres
    Like API fetch, DOM mnipulation, and setting up event listeners.
    We have to use the hook here because strArr state changes and 
    Typed is a dynamic component that changes the DOM after rendering*/
    useEffect(() => {
        const options = {
          strings: strArr,
          typeSpeed: 20,
          backSpeed: 20,
          loop: false,
          fadeOut: true,
          contentType: 'html'
        };
        
        const typed = new Typed(typedRef.current, options);
        
    
        //Re-size the window based on response length
        if(dict[curKey]){
            disImg = []; //Reset the array

            for(let i = 0; i < dict[curKey].imgArr.length; i++){
                disImg.push(
                    <ImgComp key={i} caption={dict[curKey].imgArr[i][1]} theSrc={dict[curKey].imgArr[i][0]} />
                )
            }
            

            const divElement = document.createElement("div");
            imgRef.current.firstChild.innerHTML = '';
            createRoot(divElement).render(disImg);
            imgRef.current.firstChild.appendChild(divElement);

        }

        window.scrollTo({ top: 0, behavior: 'smooth' }); //Scrolls to top
        
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
            <div id={styles.imgSlide} ref={imgRef}>
                <div>
                </div>
            </div>

        </div>

        <div className={styles.flexCon}>
            <div className={`${styles.btnLeft} ${styles.btnArrow} ${(isBtnAct <= 0)? styles.hidden: ''}`} >
            <Image id={styles.displayImg} 
                src={require("../public/home/arrowLeft.svg")}
                alt="Left arrow"
                width={30}
                height={30} onClick={() => {
                    setBtnAct(prev => {
                        return prev - 1;
                    });
                    console.log(isBtnAct);
                }}/>
            </div>
            <div className={styles.slider}>
                {sliderEle}
            </div>
            <div className={`${styles.btnRight} ${styles.btnArrow} ${(isBtnAct >= 3)? styles.hidden: ''}`}>
            <Image id={styles.displayImg} 
                src={require("../public/home/arrowRight.svg")}
                alt="Right arrow"
                width={30}
                height={30} onClick={() => {
                    setBtnAct(prev => {
                        return prev + 1;
                    });
                    console.log(isBtnAct);
                }}/>
            </div>
        </div>
        </>
    )
}


function ImgComp({caption, theSrc="profile2"}){
    return(
        <>
            <Image id={styles.displayImg} 
                    src={require(`../public/home/${theSrc}`)}
                    alt={caption}
                    width={340}
                    height={340} 
                    placeholder="blur"/>
            <p>{caption}</p>
        </>
    )
}

function BtnComp({ keyVal, onClick, isActive }){
    return (
        <>
            <div className={`${isActive? styles.btnActive: ''}`} onClick={onClick}>{keyVal}</div>
        </>
    )
}