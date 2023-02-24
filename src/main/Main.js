import React from "react";
import style from './Main.module.css'
import styleContainer from '../../src/common/style/Container.module.css'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Привет</span>
                    <h1>Антонов Алексей</h1>
                    <p>frontend developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
            <div></div>
        </div>
    );
}

export default Main;
