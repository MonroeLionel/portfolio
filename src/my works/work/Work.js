import React from "react";
import style from './Work.module.css'

function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.workImg}>
                <a className={style.href} href="#">Смотреть</a>
            </div>
            <div className={style.content}>
                <h3  className={style.text}>{props.name}</h3>
                <p className={style.text}>{props.description}
                </p>
            </div>



        </div>
    );
}

export default Work;
