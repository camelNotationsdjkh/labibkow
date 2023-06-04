import Link from "next/link";
import styles from "/styles/arrBtn.module.css"

export default function ArrBtn({ content, color, hoverColor , btnLink}) {
    const buttonStyle = {
      '--button-color': color,
      '--button-hover-color': hoverColor,
    };
  
    return (
      <>
        <button
          className={styles.button}
          style={buttonStyle}
          onClick={() => window.open(btnLink, '_blank')}
        >
        
        <span>{content}</span>
        </button>
      </>
    );
  }