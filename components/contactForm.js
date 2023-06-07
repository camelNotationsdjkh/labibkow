import { useRef } from "react";
import emailjs from '@emailjs/browser';
import styles from "/styles/form.module.css"


export default function ContactForm(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kazn2zh', 'template_qs99nq9', form.current, 'Jv8U8En9es75cRLXZ')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
    
      return (
        <>
        <div style={{
            textAlign: "center",
        }}>
            <h1>Want to get in touch?</h1>
            <p>Hey there! </p>
        </div>
        <div style={{
            display: `flex`,
            justifyContent: `center`,
        }}>
            <div className={styles.flexCon}>
              <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <input type="submit" value="Send" />
              </form>
          </div>
        </div>

          <div className={styles.note}>
            <i>*Note: To prevent spam, there's a limit on the number of emails a single IP address can send. Please do not send more than 5 messages at a time. If the message is urgent, please email me directly with the keyword URGENT. Thank you.</i>
        </div>
          </>
      );
}