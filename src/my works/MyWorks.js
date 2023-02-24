import React from "react";
import style from './MyWorks.module.css'
import styleContainer from '../../src/common/style/Container.module.css'
import Work from "./work/Work";


function MyWorks() {
    return (
        <div className={style.MyWorks}>
            <div className={`${styleContainer.container} ${style.worksContainet}`}>
                <h2 className={style.title}>мои работы</h2>
                <div className={style.work}>
                    <Work
                        name={"работа1"}
                        description={"     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi aspernatur blanditiis cumque debitis ea enim ex in incidunt iure nam odio officiis perferendis, perspiciatis ratione repellat repudiandae voluptas voluptate."}/>

                    <Work
                        name={"работа2"}
                        description={"     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi aspernatur blanditiis cumque debitis ea enim ex in incidunt iure nam odio officiis perferendis, perspiciatis ratione repellat repudiandae voluptas voluptate."}/>

                    <Work
                        name={"работа3"}
                        description={"     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi aspernatur blanditiis cumque debitis ea enim ex in incidunt iure nam odio officiis perferendis, perspiciatis ratione repellat repudiandae voluptas voluptate."}/>



                </div>
            </div>
        </div>
    );
}

export default MyWorks;
