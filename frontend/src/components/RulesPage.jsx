import styles from "../styles/RulesPage.module.css";
//import bg_desktop from "https://cdn.jsdelivr.net/gh/ArtemEternal/cdn-music/test_bg.webp";
//import bg_mobile from "https://cdn.jsdelivr.net/gh/ArtemEternal/cdn-music/corleone_verticalbg.webp";
import { RULES } from "./pisanina/textRules.jsx";
import { canvasLightning } from "../canvas.js";
import { useEffect, useRef } from "react";
import GoHomeButton from "./GoHomeButton.jsx";

export default function RulesPage(){

const canvasRef = useRef(null);

useEffect(()=>{
    const canvas = canvasRef.current;
    if(canvas){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const cl = new canvasLightning(canvas, window.innerWidth, window.innerHeight);
        cl.init();
    }else{
        console.log("Canvas not found, ref is null");
    }
},[]);

    return<>
        <div className={styles.contentContainer}>
            <picture>
                <source 
                    srcSet="https://cdn.jsdelivr.net/gh/ArtemEternal/cdn-music/test_bg.webp"
                    media="(orientation: landscape)"
                />
                <source 
                    srcSet="https://cdn.jsdelivr.net/gh/ArtemEternal/cdn-music/corleone_verticalbg.webp"
                    media="(orientation: portrait)"
                />
                <img src="https://cdn.jsdelivr.net/gh/ArtemEternal/cdn-music/corleone_verticalbg.webp"/>
            </picture>
            <canvas ref={canvasRef} className={styles.canvas}/>
            <div className={styles.textContainer}>
                {RULES}
                <div className={styles.back}>
                    <GoHomeButton content={"На главную"}/>
                </div>
            </div>
        </div>
    </>
};