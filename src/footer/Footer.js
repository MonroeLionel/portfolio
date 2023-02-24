import React from "react";
import style from './Footer.module.css'
import Social from "./social/Social";

function Footer(props) {
    return (
        <div>
            <div className={style.Footer_mainBlock}>
                <div className={style.Footer_contentBlock}></div>
                    <h3 className={style.Footer_myName}>Антонов Алексей</h3>
                    <div className={style.Footer_block}>


                        <Social/>
                        <Social/>
                        <Social/>
                        <Social/>






                    </div>
                <h3 className={style.Footer_textRights}> © All rights reserved</h3>

            </div>


        </div>
    );
}

export default Footer;
