export const dynamicParams = true;
export const revalidate = 0;

import styles from "../styles/RulesPage.module.css";
//import bg_desktop from "https://cdn.jsdelivr.net/gh/ArtemEternal/cdn-music/test_bg.webp";
//import bg_mobile from "https://cdn.jsdelivr.net/gh/ArtemEternal/cdn-music/corleone_verticalbg.webp";
//import { RULES } from "./pisanina/textRules.jsx";
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
                
                    <section className={styles.section}>
                  <div>
                    <h1>Кодекс чести семьи</h1>
                      <p class={styles.rules}>
                        Мы — не просто клан. Мы — семья.  
                        Здесь нет случайных людей. Каждый, кто носит наш тег, отвечает не только за себя, но и за имя семьи.
                      </p>
                  </div>
                
                  <div>
                    <h2>I. Уважение к семье</h2>
                    <p>
                      Каждый участник обязан относиться с уважением к членам клана.
                      Оскорбления, токсичность и неуважение внутри семьи недопустимы.
                      Споры решаются словами, а не хаосом.
                    </p>
                  </div>
                
                  <div>
                    <h2>II. Войны — дело чести</h2>
                    <p>
                      Участие в клановых войнах — не просьба, а обязанность.
                      Если ты вступил в бой — доведи его до конца.
                      Пропущенные атаки без причины считаются неуважением к семье.
                    </p>
                  </div>
                
                  <div>
                    <h2>III. Активность и вклад</h2>
                    <p>
                      Семья держится на вкладе каждого.
                      Активность в игре, помощь соклановцам, участие в жизни клана —
                      это основа нашего существования.
                    </p>
                  </div>
                
                  <div>
                    <h2>IV. Слова имеют вес</h2>
                    <p>
                      Внутри семьи не бросаются словами.
                      Обещал — выполни.
                      Взял ответственность — неси её до конца.
                    </p>
                  </div>
                
                  <div>
                    <h2>V. Старшие решают</h2>
                    <p>
                      Лидеры и сокапитаны — голос семьи.
                      Их решения не обсуждаются публично и не подвергаются сомнению.
                      Иерархия существует, чтобы сохранять порядок.
                    </p>
                  </div>
                
                  <div>
                    <h2>VI. Имя семьи — выше личного</h2>
                    <p>
                      Ты представляешь семью не только в клане, но и за его пределами.
                      Любое действие, порочащее имя семьи, считается предательством.
                    </p>
                  </div>
                
                  <div>
                    <h2>VII. Преданность</h2>
                    <p>
                      В семью не заходят «попробовать».
                      Если ты здесь — ты с нами.
                      Если ты ушёл — дороги назад может не быть.
                    </p>
                  </div>
                
                  <div>
                    <h2>VIII. Тишина — золото</h2>
                    <p>
                      Внутренние дела семьи не выносятся наружу.
                      Чужим не нужно знать, как мы живём и как решаем вопросы.
                    </p>
                  </div>
                
                  <div>
                    <h2>IX. Уважение — или последствия</h2>
                    <p>
                      Семья терпелива, но не слепа.
                      Ошибки прощаются, неуважение — нет.
                      Каждый поступок имеет последствия.
                    </p>
                  </div>
                
                  <div>
                    <h2>X. Семья — навсегда</h2>
                    <p class="final">
                      В эту семью входят один раз.
                      Здесь не играют в лояльность.
                      Здесь живут по кодексу.
                    </p>
                  </div>
                </section>
                <div className={styles.back}>
                    <GoHomeButton content={"На главную"}/>
                </div>
            </div>
        </div>
    </>
};