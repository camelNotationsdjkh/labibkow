import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import styles from "/styles/form.module.css"

export default function ContactForm(){
    const form = useRef();
    let [hasSent, setHasSent] = useState(false);
    let [showMsg, setShowMsg] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.NEXT_PUBLIC_SENDER_ID, 'template_qs99nq9', form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
          .then(() => {
              setHasSent(true);
              setShowMsg(true);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
              setHasSent(false);
              setShowMsg(true);
          });
      };

      const successMsg = (
        <>
            <h1 style={{color: "#2ecc71"}}>Success!</h1>
            <p>Message has been sent! ✅</p>
        </>
      )

      const errMsg = (
        <>
            <h1 style={{color: "#d63031"}}>Error</h1>
            <p>Something went wrong 😱! Please try again later or email me directly.</p>
        </>
      )
    
      return (
        <>
        <div className={styles.mainCon}>
            <h1>Want to get in touch?</h1>
            <p>First of all, I would like to thank you for wanting to connect with me! The best way to contact me is to 
                send an email through the form below or by sending me an email directly at <b>labibk0425@gmail.com</b>.
                Please ensure that you enter a valid email address in the form so I can get back to you!
                You can also reach me via Linkedin (link in footer)! I accept most connection requests, and 
                I will most certainly connect with fellow UBC students, staff, and prospective students.
            </p>
        </div>
        <div style={{
            display: `flex`,
            justifyContent: `center`,
        }}>
            <div className={styles.flexCon}>
              <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" required/>
                  <label>Email</label>
                  <input type="email" name="user_email" required/>
                  <label>Message</label>
                  <textarea name="message" required/>
                  <input type="submit" value="Send"/>
              </form>
          </div>
        </div>

          <div className={styles.note}>
            <i>*Note: To prevent spam, theres a limit on the number of emails a single IP address can send. Please do not send more than 5 messages at a time. If the message is urgent, please email me directly with the keyword URGENT. Thank you.</i>
        </div>

        <div className={styles.msgScreen} style={{
            display: (showMsg? "": "none"),
        }}>
            <div>
                <span onClick={() => {
                    setShowMsg(false);
                }}>X</span>
                {
                    (hasSent ? successMsg : errMsg)
                }
            </div>
        </div>
        </>
      );
}