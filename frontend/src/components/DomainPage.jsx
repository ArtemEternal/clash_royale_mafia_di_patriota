import styles from "../styles/Domain.module.css";
import GoHomeButton from "./GoHomeButton.jsx";

export default function DomainPage(){
    return<>
        <div className={styles.contentContainer}>
            <div>
                <h1>
                    Захваченные нами кланы и пленные:
                </h1>
            </div>
            <div className={styles.domainList}>
                На данный момент список пуст, однако наша армия воинов славных с каждым днём крепчает... 
            </div>
            <GoHomeButton content={"На главную"}/>
        </div>
    </>
}