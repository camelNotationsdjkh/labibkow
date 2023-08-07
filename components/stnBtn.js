import styles from '/styles/stnBtn.module.css'

export default function StnBtn({text, link, newWin}){
    return (
        <>
            <button
            className={styles.button}
            onClick={() => {
                if(newWin) window.open(link, '_blank');
                else window.location.href = link;
            }}
            >
        
            {text}
            </button>
        </>
    )
}