import Image from "next/image"
import Link from "next/link"
import styles from "../styles/footer.module.css"

export default function Footer(){
    const imageDim = 34;
    const currentYear = new Date().getFullYear();

    return(
        <>
            <div className={styles.footerCon}>
                <div className={styles.flex}>
                    <Link href="https://github.com/camelNotationsdjkh">
                        <Image 
                        src={require("../public/footer/githubBlack.svg")}
                        alt="Github Logo with link to my github"
                        width={imageDim}
                        height={imageDim}
                        />
                    </Link>
                    
                    <Link href="https://www.linkedin.com/in/labibkowsar/">
                        <Image 
                        src={require("../public/footer/linkedin.svg")}
                        alt="Linkedin logo with link to my linkedin"
                        width={imageDim}
                        height={imageDim}
                        />
                    </Link>

                    <Link href="/contact">
                        <Image 
                        src={require("../public/footer/mail.svg")}
                        alt="Mail  Logo with link to my email contact"
                        width={imageDim}
                        height={imageDim}
                        />
                    </Link>

                </div>
                <div className={styles.flex}>
                    <div>&copy; Labib Kowsar {currentYear} &trade;</div>
                </div>
            </div>
        </>
    )
}