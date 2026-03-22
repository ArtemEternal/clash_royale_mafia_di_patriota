import { use, useState } from "react";
import styles from "../styles/BossModule.module.css";
import BossPage from "./BossPage.jsx";
import Button from "./Button.jsx";
import GoHomeButton from "./GoHomeButton.jsx";

export default function BossModule(){

    const [go, setGo] = useState(false);
    const [sound, setSound] = useState(false);

    const WithOutSound = () => {
        setSound(true);
        setGo(true);
    }

    const WithSound = () => {
        setSound(false);
        setGo(true);
    }

    return<>
        {go ?  
            <BossPage sound={sound}/> 
                : 
            <div className={styles.contentContainer}>
                <div className={styles.divdiv}>
                    <div className={styles.div1}><Button classNamee="Neon" children={"Продолжить со звуком"} onClick={WithSound}/></div>
                    <div className={styles.div2}><Button classNamee="Neon" children={"Продолжить без звука"} onClick={WithOutSound}/></div>
                </div>
                <div className={styles.div3}><GoHomeButton content={"На главную"}/></div>
            </div>}
    </>
}