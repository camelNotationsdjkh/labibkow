import styles from "/styles/defCard.module.css"
import Image from 'next/image';

export default function DefCard({theDict,vis, setVis}){
    let tagArr = [];
    const tags = theDict.tags;
    const imgLink = theDict.imgLink;
    const theme = theDict.theme;
    const text = theDict.text;

    const handleClick = () => {
        setVis(false);
    }

    for(let i = 0; i < tags.length; i++){
        tagArr.push(
            <div key={tags[i]}>{tags[i]}</div>
        )
    }

    return (
            <div className={styles.card} style={{
                display: `${vis?"block":"none"}`,
            }}>
                <div className={styles.innerGrid}>
                    <div className={styles.sideImg} style={{
                        backgroundImage: `url("/project/${imgLink}")`,
                    }}/>

                    <div className={styles.leftBox}>
                        <div className={styles.topCard}>
                            <div>{tagArr}</div>
                            <Image src="/project/cancel.svg"
                                alt="Left arrow"
                                width={30}
                                height={30} onClick={handleClick} />
                        </div>
                        <div className={styles.content}>{text}</div>
                    </div>
                </div>
            </div>
    )
}