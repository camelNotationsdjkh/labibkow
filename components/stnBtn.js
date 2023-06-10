import styles from '/styles/stnBtn.module.css'

export default function StnBtn({text, link, target="_blank"}){
    return (
        <>
            <button
            className={styles.button}
            onClick={() => window.open(link, target)}
            >
        
            {text}
            </button>
        </>
    )
}