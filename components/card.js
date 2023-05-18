import { useState } from "react";
import styles from "../styles/card.module.css";
import Image from 'next/image';

export default function Card({keyVal, setKey, imgLink, text, themeColor, vis, setVis}) {
  
  return (
    <>
      <div className={styles.gridCard}  onClick={() => {
        setVis(!vis);
        setKey(keyVal);
      }}>
        <div className={styles.top} style={{
          backgroundImage: `url(/home/${imgLink})`
        }}>
        </div>
        <div className={styles.bottom} style={{
          background: `${themeColor}`,
        }}>This the bottom</div>
      </div>
    </>
  );
}
