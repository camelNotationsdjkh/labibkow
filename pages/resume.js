import StnBtn from "@/components/stnBtn";
import styles from "../styles/resume.module.css"

export default function ResumePage(){
    return (
        <>
            <div className={styles.headerCon}>
                <h1>My resumes:</h1>
                <h3>Below are resumes for different focus types. The one displayed in the iframe is 
                    a hybrid of all three, and my general engineering resume that I use most commonly.
                </h3>
            </div>
            
            <div className={styles.flexCon}>
                <StnBtn text="General Engineering" link="/" />
                <StnBtn text="Hardware Focus" link="/" />
                <StnBtn text="Software Focus" link="/" />
                <StnBtn text="Non-technical" link="/" />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
            }}>
                <div className={styles.bar}></div>
            </div>
            <div className={styles.iframeCon}>
                <iframe src="\resume\IntakeResume.pdf" width="100%" height="500px"></iframe>
            </div>

        </>
    )
}