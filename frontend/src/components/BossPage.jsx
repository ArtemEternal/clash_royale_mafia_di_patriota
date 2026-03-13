import styles from "../styles/BossPage.module.css";
//import CorleoneBg from "../../public/Corleone.mp4";
//import CorleoneBg2 from "@/assets/background";
import CorleoneBg2 from "../../public/background.mp4";
import { useEffect, useRef } from "react";
import { canvasLightning } from "../canvas.js";
//import tg from "@/assets/telegram";
//import gm from "@/assets/gmail";
//import home from "@/assets/home";
import GoHomeButton from "./GoHomeButton.jsx";

export default function BossPage(){

    //const canvasRef = useRef(null);

    useEffect(() => {
        if(videoRef.current){
            videoRef.current.volume = 0.002;
        };
    /*const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cl = new canvasLightning(canvas, window.innerWidth, window.innerHeight);
      cl.init();
    } else {
      console.log("Canvas not found, ref is null");
    }*/
    },[]);


    const videoRef = useRef(null);

    return<>
        <div className={styles.videoContainer}>
            <video
                ref={videoRef}
                autoPlay
                loop
                playsInline
                muted={false}
                className={styles.videoBg}
            >
                <source srcSet={CorleoneBg2} type="video/mp4"/>
            </video>
            <video
                autoPlay
                loop
                playsInline
                muted
                className={styles.videoBg2}
            >
                <source srcSet={CorleoneBg2} type="video/mp4"/>
            </video>
            {/*<canvas ref={canvasRef} className={styles.canvas}/>*/}
        </div>
        <div className={styles.contentContainer}>
            <h1>Don Patriot.dev</h1>
            <div className={styles.aboutMeContainer}>
                <a
                    href="https://t.me/lavahound_cr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="@/assets/telegram.png" alt="Telegram"/>
                </a>
                <div className={styles.goHomeButton}>
                    <GoHomeButton content={<img  src="@/assets/home.png" alt="Home"/>}/>
                </div>
                <a
                    href="https://mail.google.com/mail/?view=cm&to=artem22october@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="../assets/gmail.png" alt="Gmail"/>
                </a>
            </div>
        </div>
    </>
}