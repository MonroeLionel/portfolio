import React from "react";
import style from './Form.module.css'

function Form(props) {
    return (
        <div className={style.work}>
            {/*<div className={style.workImg}>*/}
            {/*    <a className={style.href} href="#">Смотреть</a>*/}
            {/*</div>*/}
            <div className={style.content}>
                <input  className={style.text}></input>
                <input  className={style.text}></input>
                <textarea className={style.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur dicta error illo, vel
                    veritatis voluptatum. Architecto aspernatur, aut, autem, commodi corporis dicta facere modi natus
                    perspiciatis porro repellendus vitae.
                </textarea>
            </div>



        </div>
    );
}

export default Form;