import React from "react";
import style from './contact.module.css'


function Contact() {

    return (
        <div id="contacts" className={style.Contacts_mainBlock}>
            <div className={style.Contacts_content} >
                <div className={style.Contacts_content}>
                    <div className={style.HeaderTitle_title}>
                      <h3>Контакты</h3>
                    </div>
                    <form id="#myForm" className={style.Contacts_formContacts}>
                        <input name="name"
                               placeholder="Your Name"
                               type="text" value=""/>
                        <div className={style.Contacts_errorText}>Incorrect name</div>
                        <input name="email" placeholder="Your Email" type="email" value=""/>
                        <div className={style.Contacts_errorText}>Email required</div>
                        <textarea name="messages" placeholder="Your Message"></textarea>
                        <div className={style.Contacts_errorText}>Please write a message</div>
                        <button type="submit" className={style.Contacts_buttonSubmit}>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Contact;

