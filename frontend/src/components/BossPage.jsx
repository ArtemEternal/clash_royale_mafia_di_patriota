import styles from "../styles/BossPage.module.css";
import tg from "../../public/telegram.png";
//import CorleoneBg from "/Godfather2.mp4";
import bg_desktop from "../../public/test_bg.jpg";
import { useEffect, useRef } from "react";
import { canvasLightning } from "../canvas.js";
import gm from "../../public/gmail.png";
import home from "../../public/home.png";
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
                <source src="@assets/Godfather2.mp4"/>
            </video>
            <video
                autoPlay
                loop
                playsInline
                muted
                className={styles.videoBg2}
            >
                <source src="/assets/Godfather2.mp4"/>
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
                    <img srcSet={tg} alt="Telegram"/>
                </a>
                <div className={styles.goHomeButton}>
                    <GoHomeButton content={<img  srcSet={home} alt="Home"/>}/>
                </div>
                <a
                    href="https://mail.google.com/mail/?view=cm&to=artem22october@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img srcSet={gm} alt="Gmail"/>
                </a>
            </div>
        </div>
    </>
}