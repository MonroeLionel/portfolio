import React from "react";
import style from './Skills..module.css'
import styleContainer from '../../src/common/style/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainet}`}>
                <h2 className={style.title}>Skill</h2>
                <div className={style.skills}>
                    <Skill
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti ducimus eum expedita labore quo reprehenderit? Aut, cupiditate debitis, dolorem expedita in iure laborum laudantium mollitia, neque perferendis sunt voluptatibus.'}
                        title={"React"}/>
                    <Skill
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti ducimus eum expedita labore quo reprehenderit? Aut, cupiditate debitis, dolorem expedita in iure laborum laudantium mollitia, neque perferendis sunt voluptatibus.'}
                        title={"Redux"}/>
                    <Skill
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti ducimus eum expedita labore quo reprehenderit? Aut, cupiditate debitis, dolorem expedita in iure laborum laudantium mollitia, neque perferendis sunt voluptatibus.'}
                        title={"HTML"}/>
                    <Skill
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti ducimus eum expedita labore quo reprehenderit? Aut, cupiditate debitis, dolorem expedita in iure laborum laudantium mollitia, neque perferendis sunt voluptatibus.'}
                        title={"CSS"}/>


                </div>
            </div>
        </div>
    );
}

export default Skills;
