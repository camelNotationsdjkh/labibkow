import styles from "../styles/card.module.css";

export default function Card({keyVal, ...rest}) {
  //setKey, imgLink, text, themeColor, vis, setVis
  const setKey = rest.setKey;
  const imgLink = rest.imgLink;
  const text = rest.text;
  const themeColor = rest.themeColor;
  const vis = rest.vis;
  const setVis = rest.setVis;
  
  return (
    <>
      <div className={styles.gridCard}  onClick={() => {
        setVis(!vis);
        setKey(keyVal);
      }}>
        <div className={styles.top} style={{
          backgroundImage: `url(/project/${imgLink})`
        }}>
        </div>
        <div className={styles.bottom} style={{
          background: `${themeColor}`,
        }}>{text}</div>
      </div>
    </>
  );
}
