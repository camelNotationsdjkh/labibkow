import styles from "/styles/arrBtn.module.css"

export default function ArrBtn({ content, color, hoverColor , btnLink, newWin}) {
    const buttonStyle = {
      '--button-color': color,
      '--button-hover-color': hoverColor,
    };
  
    return (
      <>
        <button
          className={styles.button}
          style={buttonStyle}
          onClick={() => {
            if(newWin) window.open(btnLink, '_blank');
            else window.location.href = btnLink;
          }}
        >
        
        <span>{content}</span>
        </button>
      </>
    );
  }