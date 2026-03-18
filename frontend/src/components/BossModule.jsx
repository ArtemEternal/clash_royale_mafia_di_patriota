import { use, useState } from "react";
import styles from "../styles/BossModule.module.css";
import BossPage from "./BossPage.jsx";
import Button from "./Button.jsx";

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
                <Button children={"Продолжить со звуком"} onClick={WithSound}/>
                <Button children={"Продолжить без звука"} onClick={WithOutSound}/>
            </div>}
    </>
}